import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";

import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { ContactUsService } from "./contact-us.service";

@Controller("contact-us")
export class ContactUsController {
  constructor(
    private readonly contactUsService: ContactUsService,
  ) {}

  @Post()
  async create(
    @Body() createContactUsDto: CreateContactUsDto,
  ) {
    const data = await this.contactUsService.create(
      createContactUsDto,
    );

    return {
      success: true,
      message: "Contact message submitted successfully",
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.contactUsService.findAll();

    return {
      success: true,
      data,
    };
  }

  @Get(":id")
  async findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    const data = await this.contactUsService.findOne(id);

    return {
      success: true,
      data,
    };
  }
}
