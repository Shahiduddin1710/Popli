import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BrevoService } from '../brevo/brevo.service';
import { ContactFormDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private brevo: BrevoService) {}

  async sendContactEmail(dto: ContactFormDto): Promise<void> {
    await this.brevo.sendContactEmail(dto);
  }
}