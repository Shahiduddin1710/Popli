import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactFormDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async submit(@Body() dto: ContactFormDto) {
    await this.contactService.sendContactEmail(dto);
    return { success: true, message: 'Your message has been sent successfully.' };
  }
}