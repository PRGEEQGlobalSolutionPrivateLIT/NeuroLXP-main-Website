import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateTalkToExpertDto } from "./dto/create-talk-to-expert.dto";
import { TalkToExpert } from "./entities/talk-to-expert.entity";

@Injectable()
export class TalkToExpertService {
  constructor(
    @InjectRepository(TalkToExpert)
    private readonly talkToExpertRepository: Repository<TalkToExpert>,
  ) {}

  async create(
    createTalkToExpertDto: CreateTalkToExpertDto,
  ): Promise<TalkToExpert> {
    const enquiry = this.talkToExpertRepository.create({
      fullName: createTalkToExpertDto.fullName.trim(),
      email: createTalkToExpertDto.email.trim().toLowerCase(),
      countryCode: createTalkToExpertDto.countryCode.trim().toUpperCase(),
      phone: createTalkToExpertDto.phone.replace(/\D/g, ""),
      interest: createTalkToExpertDto.interest.trim(),
      query: createTalkToExpertDto.query?.trim() || null,
      consent: createTalkToExpertDto.consent,
    });

    return this.talkToExpertRepository.save(enquiry);
  }

  async findAll(): Promise<TalkToExpert[]> {
    return this.talkToExpertRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(id: number): Promise<TalkToExpert | null> {
    return this.talkToExpertRepository.findOne({
      where: {
        id,
      },
    });
  }
}
