import { Injectable, Logger } from '@nestjs/common';
import { PayoutProvider, PayoutRequest, PayoutResult } from './payout-provider.interface';
import axios from 'axios';

@Injectable()
export class CashfreePayoutProvider implements PayoutProvider {
  private readonly logger = new Logger(CashfreePayoutProvider.name);

  private get baseUrl(): string {
    return process.env.CASHFREE_ENV === 'production'
      ? 'https://payout-api.cashfree.com'
      : 'https://payout-gamma.cashfree.com';
  }

  private get clientId(): string {
    return process.env.CASHFREE_PAYOUT_CLIENT_ID!;
  }

  private get clientSecret(): string {
    return process.env.CASHFREE_PAYOUT_CLIENT_SECRET!;
  }

  private async getAuthToken(): Promise<string> {
    const res = await axios.post(
      `${this.baseUrl}/payout/v1/authorize`,
      {},
      {
        headers: {
          'X-Client-Id': this.clientId,
          'X-Client-Secret': this.clientSecret,
        },
        timeout: 15000,
      },
    );
    if (res.data?.status !== 'SUCCESS') {
      throw new Error(`Cashfree auth failed: ${JSON.stringify(res.data)}`);
    }
    return res.data.data.token;
  }

  async initiatePayout(request: PayoutRequest): Promise<PayoutResult> {
    try {
      const token = await this.getAuthToken();

      const transferId = `TXN_${request.idempotencyKey.replace(/[^a-zA-Z0-9]/g, '').slice(0, 38)}`;
      const amountInRupees = Math.round(request.amount * 100) / 100;

      const payload: Record<string, any> = {
        beneDetails: {
          name: request.recipientName,
          email: `payout_${transferId.toLowerCase().slice(0, 20)}@popli.internal`,
          phone: '9999999999',
          address1: request.address || 'India',
        },
        amount: String(amountInRupees),
        transferId,
        transferMode: request.upiId ? 'UPI' : 'NEFT',
        remarks: request.narration,
      };

      if (request.upiId) {
        payload.beneDetails.vpa = request.upiId;
      } else {
        payload.beneDetails.bankAccount = request.bankAccount;
        payload.beneDetails.ifsc = request.ifscCode;
      }

      const res = await axios.post(
        `${this.baseUrl}/payout/v2/transfers`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          timeout: 30000,
        },
      );

      const data = res.data;
      this.logger.log(`Cashfree v2 transfer initiated: ${transferId} | status: ${data?.status} | response: ${JSON.stringify(data)}`);

      if (data?.status === 'SUCCESS') {
        const transferStatus = data?.data?.transfer?.status || 'PENDING';
        const cfTransferId = data?.data?.transfer?.referenceId || transferId;

        return {
          success: true,
          payoutId: cfTransferId,
          status: this.mapCashfreeStatus(transferStatus),
          providerResponse: data,
        };
      }

      return {
        success: false,
        status: 'failed',
        providerResponse: data,
        errorMessage: data?.message || 'Transfer request failed',
      };
    } catch (err: any) {
      const errorData = err?.response?.data || {};
      this.logger.error(`Cashfree payout failed: ${JSON.stringify(errorData)} | message: ${err.message} | status: ${err?.response?.status} | url: ${err?.config?.url}`);
      return {
        success: false,
        status: 'failed',
        providerResponse: errorData,
        errorMessage: errorData?.message || err.message,
      };
    }
  }

  async fetchPayoutStatus(payoutId: string): Promise<PayoutResult> {
    try {
      const token = await this.getAuthToken();
      const res = await axios.get(
        `${this.baseUrl}/payout/v2/transfers?referenceId=${payoutId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          timeout: 15000,
        },
      );
      const data = res.data;
      const transferStatus = data?.data?.transfer?.status || 'PENDING';

      return {
        success: true,
        payoutId,
        status: this.mapCashfreeStatus(transferStatus),
        providerResponse: data,
      };
    } catch (err: any) {
      const errorData = err?.response?.data || {};
      return {
        success: false,
        status: 'failed',
        providerResponse: errorData,
        errorMessage: errorData?.message || err.message,
      };
    }
  }

  private mapCashfreeStatus(cfStatus: string): string {
    const map: Record<string, string> = {
      SUCCESS: 'processed',
      FAILED: 'failed',
      REVERSED: 'reversed',
      PENDING: 'pending',
      QUEUED: 'queued',
      ACKNOWLEDGED: 'pending',
    };
    return map[cfStatus?.toUpperCase()] || 'pending';
  }
}