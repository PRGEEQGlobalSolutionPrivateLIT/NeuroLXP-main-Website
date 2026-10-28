
import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  InternalServerErrorException,
  Logger,
  Post,
} from '@nestjs/common';

import { EmailService } from './email.service';

type BookDemoRequest = {
  fullName: string;
  email: string;
  organizationName?: string;
  countryCode?: string;
  phone: string;
  demoDate: string;
  demoTime: string;
  message?: string;
  consent: boolean;
};

type ContactUsRequest = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};

type TalkToExpertRequest = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  interest: string;
  query: string;
  consent: boolean;
};

@Controller('email')
export class EmailController {
  private readonly logger = new Logger(EmailController.name);

  constructor(
    private readonly emailService: EmailService,
  ) {}

  // Existing Book a Demo API - unchanged
  @Post('book-demo')
  async submitBookDemo(
    @Body() body: BookDemoRequest,
  ) {
    if (
      !body ||
      typeof body.fullName !== 'string' ||
      !body.fullName.trim() ||
      typeof body.email !== 'string' ||
      !body.email.trim() ||
      typeof body.phone !== 'string' ||
      !body.phone.trim() ||
      typeof body.demoDate !== 'string' ||
      !body.demoDate.trim() ||
      typeof body.demoTime !== 'string' ||
      !body.demoTime.trim() ||
      body.consent !== true
    ) {
      throw new BadRequestException(
        'Please provide all required fields and accept the privacy policy.',
      );
    }

    try {
      await this.emailService.sendDemoNotification({
        fullName: body.fullName.trim(),
        email: body.email.trim(),
        organizationName:
          typeof body.organizationName === 'string'
            ? body.organizationName.trim()
            : '',
        countryCode:
          typeof body.countryCode === 'string'
            ? body.countryCode.trim()
            : '',
        phone: body.phone.trim(),
        demoDate: body.demoDate,
        demoTime: body.demoTime,
        message:
          typeof body.message === 'string'
            ? body.message.trim()
            : '',
      });

      return {
        success: true,
        message: 'Your demo request has been emailed successfully.',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Unable to send your demo request. Please try again later.',
      );
    }
  }

  // Existing Contact Us API
  @Post('contact-us')
  async submitContactUs(
    @Body() body: ContactUsRequest,
  ) {
    this.logger.log('Contact Us API request received');

    if (
      !body ||
      typeof body.fullName !== 'string' ||
      !body.fullName.trim() ||
      typeof body.email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()) ||
      typeof body.countryCode !== 'string' ||
      !body.countryCode.trim() ||
      typeof body.phone !== 'string' ||
      !/^\d{4,15}$/.test(body.phone.trim()) ||
      typeof body.subject !== 'string' ||
      !body.subject.trim() ||
      typeof body.message !== 'string' ||
      !body.message.trim() ||
      body.message.length > 250 ||
      body.consent !== true
    ) {
      throw new BadRequestException(
        'Please provide valid Contact Us details and accept the privacy policy.',
      );
    }

    try {
      await this.emailService.sendContactUsNotification({
        fullName: body.fullName.trim(),
        email: body.email.trim(),
        countryCode: body.countryCode.trim(),
        phone: body.phone.trim(),
        subject: body.subject.trim(),
        message: body.message.trim(),
        consent: body.consent,
      });

      this.logger.log(
        'Contact Us notification processed successfully',
      );

      return {
        success: true,
        message: 'Your Contact Us message has been emailed successfully.',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      this.logger.error(
        'Contact Us email failed',
        error instanceof Error ? error.stack : String(error),
      );

      throw new InternalServerErrorException(
        'Unable to send your Contact Us message. Please try again later.',
      );
    }
  }

  // New Talk to Our Expert API
  @Post('talk-to-expert')
  async submitTalkToExpert(
    @Body() body: TalkToExpertRequest,
  ) {
    this.logger.log('Talk to Our Expert API request received');

    if (
      !body ||
      typeof body.fullName !== 'string' ||
      !body.fullName.trim() ||
      typeof body.email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()) ||
      typeof body.countryCode !== 'string' ||
      !body.countryCode.trim() ||
      typeof body.phone !== 'string' ||
      !/^\d{4,15}$/.test(body.phone.trim()) ||
      typeof body.interest !== 'string' ||
      !body.interest.trim() ||
      typeof body.query !== 'string' ||
      !body.query.trim() ||
      body.query.length > 250 ||
      body.consent !== true
    ) {
      throw new BadRequestException(
        'Please provide valid Talk to Our Expert details and accept the privacy policy.',
      );
    }

    try {
      await this.emailService.sendTalkToExpertNotification({
        fullName: body.fullName.trim(),
        email: body.email.trim(),
        countryCode: body.countryCode.trim(),
        phone: body.phone.trim(),
        interest: body.interest.trim(),
        query: body.query.trim(),
        consent: body.consent,
      });

      this.logger.log(
        'Talk to Our Expert notification processed successfully',
      );

      return {
        success: true,
        message: 'Your expert query has been emailed successfully.',
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      this.logger.error(
        'Talk to Our Expert email failed',
        error instanceof Error ? error.stack : String(error),
      );

      throw new InternalServerErrorException(
        'Unable to send your expert query. Please try again later.',
      );
    }
  }
}
