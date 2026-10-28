import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateBookDemoDto } from "./dto/create-book-demo.dto";
import { BookDemo } from "./entities/book-demo.entity";

@Injectable()
export class BookDemoService {
  constructor(
    @InjectRepository(BookDemo)
    private readonly bookDemoRepository: Repository<BookDemo>,
  ) {}

  async create(
    createBookDemoDto: CreateBookDemoDto,
  ): Promise<BookDemo> {
    const demo = this.bookDemoRepository.create({
      fullName: createBookDemoDto.fullName.trim(),
      email: createBookDemoDto.email.trim().toLowerCase(),
      countryCode: createBookDemoDto.countryCode
        .trim()
        .toUpperCase(),
      phone: createBookDemoDto.phone.replace(/\D/g, ""),
      demoDate: createBookDemoDto.demoDate,
      demoTime: this.normalizeTime(
        createBookDemoDto.demoTime,
      ),
      message:
        createBookDemoDto.message?.trim() || null,
      consent: createBookDemoDto.consent,
    });

    return await this.bookDemoRepository.save(demo);
  }

  async findAll(): Promise<BookDemo[]> {
    return await this.bookDemoRepository.find({
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(
    id: number,
  ): Promise<BookDemo | null> {
    return await this.bookDemoRepository.findOne({
      where: {
        id,
      },
    });
  }

  private normalizeTime(time: string): string {
    const cleaned = time.replace(/\s/g, "");

    const [hour, minute] = cleaned.split(":");

    return `${hour.padStart(2, "0")}:${minute.padStart(
      2,
      "0",
    )}`;
  }
}