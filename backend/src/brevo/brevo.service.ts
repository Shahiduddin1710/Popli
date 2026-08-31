import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class BrevoService {
  private readonly apiKey = process.env.BREVO_API_KEY!;
  private readonly senderEmail = process.env.BREVO_SENDER_EMAIL!;
  private readonly senderName = process.env.BREVO_SENDER_NAME || 'Popli';

  async sendContactEmail(dto: { name: string; email: string; subject: string; message: string }): Promise<void> {
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    if (!receiverEmail) {
      throw new InternalServerErrorException('Contact receiver email is not configured');
    }

    const body = {
      sender: { name: this.senderName, email: this.senderEmail },
      to: [{ email: receiverEmail }],
      replyTo: { email: dto.email, name: dto.name },
      subject: `[Popli Contact] ${dto.subject}`,
        htmlContent: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:580px;margin:auto;background:#ffffff;">
          <div style="background:#004ac6;padding:28px 32px;border-radius:12px 12px 0 0;">
            <span style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;">POPLI</span>
          </div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
            <h2 style="font-size:18px;font-weight:700;color:#111827;margin:0 0 4px;">New Contact Form Submission</h2>
       
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;width:80px;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111827;font-weight:500;">${dto.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;font-size:14px;color:#004ac6;">${dto.email}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em;">Subject</td>
                <td style="padding:12px 0;font-size:14px;color:#111827;font-weight:500;">${dto.subject}</td>
              </tr>
            </table>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;">
              <p style="font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Message</p>
              <p style="font-size:14px;color:#374151;line-height:1.75;margin:0;white-space:pre-wrap;">${dto.message}</p>
            </div>
            <p style="font-size:12px;color:#9ca3af;margin:24px 0 0;padding-top:20px;border-top:1px solid #f3f4f6;">Hit reply to respond directly to ${dto.name} at ${dto.email}.</p>
          </div>
        </div>
      `,
      textContent: `New Contact Form Submission\n\nName: ${dto.name}\nEmail: ${dto.email}\nSubject: ${dto.subject}\n\nMessage:\n${dto.message}`,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Brevo contact email failed:', err);
      throw new InternalServerErrorException('Failed to send contact email');
    }
  }

  async sendEmailOtp(toEmail: string, otp: string): Promise<void> {
    const body = {
      sender: { name: this.senderName, email: this.senderEmail },
      to: [{ email: toEmail }],
      subject: `${otp} is your Popli verification code`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:32px;background:#0f0f0f;color:#fff;border-radius:12px;">
          <h2 style="color:#a855f7;margin-bottom:8px;">Verify your email</h2>
          <p style="color:#ccc;margin-bottom:24px;">Use the code below to verify your email address. It expires in <strong>5 minutes</strong>.</p>
          <div style="background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:20px;text-align:center;">
            <span style="font-size:36px;font-weight:bold;letter-spacing:10px;color:#a855f7;">${otp}</span>
          </div>
          <p style="color:#666;font-size:12px;margin-top:24px;">If you didn't request this, ignore this email. Do not share this code with anyone.</p>
        </div>
      `,
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Brevo send failed:', err);
      throw new InternalServerErrorException('Failed to send verification email');
    }
  }
}