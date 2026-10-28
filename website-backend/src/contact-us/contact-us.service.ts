import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { ContactUs } from "./entities/contact-us.entity";

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUs)
    private readonly contactUsRepository: Repository<ContactUs>,
  ) {}

  async create(
    createContactUsDto: CreateContactUsDto,
  ): Promise<ContactUs> {
    const contact = this.contactUsRepository.create({
      fullName: createContactUsDto.fullName.trim(),
      email: createContactUsDto.email.trim().toLowerCase(),
      countryCode: createContactUsDto.countryCode
        .trim()
        .toUpperCase(),
      phone: createContactUsDto.phone.replace(/\D/g, ""),
      subject: createContactUsDto.subject.trim(),
      message: createContactUsDto.message.trim(),
      consent: createContactUsDto.consent,
    });

    return this.contactUsRepository.save(contact);
  }

  async findAll(): Promise<ContactUs[]> {
    return this.contactUsRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(
    id: number,
  ): Promise<ContactUs | null> {
    return this.contactUsRepository.findOne({
      where: {
        id,
      },
    });
  }
}