
import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  private readonly resend = new Resend(
    process.env.RESEND_API_KEY,
  );

  // Existing Book a Demo email notification
  async sendDemoNotification(data: {
    fullName: string;
    email: string;
    organizationName?: string;
    countryCode?: string;
    phone: string;
    demoDate: string;
    demoTime: string;
    message?: string;
  }): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL;
    const from = process.env.EMAIL_FROM;

    if (!adminEmail || !from || !process.env.RESEND_API_KEY) {
      throw new Error('Resend email configuration is missing.');
    }

    const result = await this.resend.emails.send({
      from,
      to: adminEmail,
      replyTo: data.email,
      subject: `New Book a Demo Request - ${data.fullName}`,
      html: `
        <h2>New Book a Demo Request</h2>
        <p><strong>Name:</strong> ${this.escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${this.escapeHtml(data.email)}</p>
        <p><strong>Organization:</strong> ${this.escapeHtml(data.organizationName || 'Not provided')}</p>
        <p><strong>Phone:</strong> ${this.escapeHtml(data.countryCode || '')} ${this.escapeHtml(data.phone)}</p>
        <p><strong>Demo Date:</strong> ${this.escapeHtml(data.demoDate)}</p>
        <p><strong>Demo Time:</strong> ${this.escapeHtml(data.demoTime)}</p>
        <p><strong>Message:</strong> ${this.escapeHtml(data.message || 'Not provided')}</p>
      `,
    });

    if (result.error) {
      this.logger.error(`Resend failed: ${result.error.message}`);
      throw new Error('Unable to send demo notification email.');
    }

    this.logger.log('Demo notification email sent.');
  }

  // Existing Contact Us email notification
  async sendContactUsNotification(data: {
    fullName: string;
    email: string;
    countryCode: string;
    phone: string;
    subject: string;
    message: string;
    consent: boolean;
  }): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL;
    const from = process.env.EMAIL_FROM;

    if (!adminEmail || !from || !process.env.RESEND_API_KEY) {
      throw new Error('Resend email configuration is missing.');
    }

    const result = await this.resend.emails.send({
      from,
      to: adminEmail,
      replyTo: data.email,
      subject: `New Contact Us Message - ${data.subject}`,
      html: `
        <h2>New Contact Us Form Submission</h2>
        <p><strong>Form:</strong> Contact Us</p>
        <p><strong>Name:</strong> ${this.escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${this.escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${this.escapeHtml(data.countryCode)} ${this.escapeHtml(data.phone)}</p>
        <p><strong>Subject:</strong> ${this.escapeHtml(data.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${this.escapeHtml(data.message).replace(/\r?\n/g, '<br>')}</p>
        <p><strong>Privacy Consent:</strong> ${data.consent ? 'Accepted' : 'Not accepted'}</p>
      `,
    });

    if (result.error) {
      this.logger.error(
        `Resend Contact Us failed: ${result.error.message}`,
      );
      throw new Error('Unable to send Contact Us notification email.');
    }

    this.logger.log('Contact Us notification email sent.');
  }

  // New Talk to Our Expert email notification
  async sendTalkToExpertNotification(data: {
    fullName: string;
    email: string;
    countryCode: string;
    phone: string;
    interest: string;
    query: string;
    consent: boolean;
  }): Promise<void> {
    const adminEmail = process.env.ADMIN_EMAIL;
    const from = process.env.EMAIL_FROM;

    if (!adminEmail || !from || !process.env.RESEND_API_KEY) {
      this.logger.error(
        'Talk to Our Expert: Resend email configuration is missing.',
      );

      throw new Error('Resend email configuration is missing.');
    }

    this.logger.log(
      'Processing Talk to Our Expert email notification.',
    );

    const result = await this.resend.emails.send({
      from,
      to: adminEmail,
      replyTo: data.email,
      subject: `New Talk to Our Expert Request - ${data.interest}`,
      html: `
        <h2>New Talk to Our Expert Request</h2>

        <p><strong>Form:</strong> Talk to Our Expert</p>

        <p><strong>Full Name:</strong> ${this.escapeHtml(data.fullName)}</p>

        <p><strong>Email:</strong> ${this.escapeHtml(data.email)}</p>

        <p><strong>Country Code:</strong> ${this.escapeHtml(data.countryCode)}</p>

        <p><strong>Phone Number:</strong> ${this.escapeHtml(data.phone)}</p>

        <p><strong>Area of Interest:</strong> ${this.escapeHtml(data.interest)}</p>

        <p><strong>Query / Question:</strong></p>

        <p>${this.escapeHtml(data.query).replace(/\r?\n/g, '<br>')}</p>

        <p><strong>Privacy Consent:</strong> ${
          data.consent ? 'Accepted' : 'Not accepted'
        }</p>
      `,
    });

    if (result.error) {
      this.logger.error(
        `Talk to Our Expert Resend failed: ${result.error.message}`,
      );

      throw new Error(
        'Unable to send Talk to Our Expert notification email.',
      );
    }

    this.logger.log(
      `Talk to Our Expert notification accepted by Resend. Email ID: ${
        result.data?.id ?? 'Not available'
      }`,
    );
  }

  // Shared HTML escaping for all email notifications
  private escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => {
      const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };

      return entities[character];
    });
  }
}
