import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";

import { CreateBookDemoDto } from "./dto/create-book-demo.dto";
import { BookDemoService } from "./book-demo.service";

@Controller("book-demo")
export class BookDemoController {
  constructor(
    private readonly bookDemoService: BookDemoService,
  ) {}

  @Post()
  async create(
    @Body() createBookDemoDto: CreateBookDemoDto,
  ) {
    const data =
      await this.bookDemoService.create(
        createBookDemoDto,
      );

    return {
      success: true,
      message: "Demo booking submitted successfully",
      data,
    };
  }

  @Get()
  async findAll() {
    const data =
      await this.bookDemoService.findAll();

    return {
      success: true,
      data,
    };
  }

  @Get(":id")
  async findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    const data =
      await this.bookDemoService.findOne(id);

    return {
      success: true,
      data,
    };
  }
}