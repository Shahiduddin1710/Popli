import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { BrevoModule } from '../brevo/brevo.module';

@Module({
  imports: [BrevoModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}