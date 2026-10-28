import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";

import { CreateTalkToExpertDto } from "./dto/create-talk-to-expert.dto";
import { TalkToExpertService } from "./talk-to-expert.service";

@Controller("talk-to-expert")
export class TalkToExpertController {
  constructor(
    private readonly talkToExpertService: TalkToExpertService,
  ) {}

  @Post()
  async create(
    @Body() createTalkToExpertDto: CreateTalkToExpertDto,
  ) {
    const data = await this.talkToExpertService.create(
      createTalkToExpertDto,
    );

    return {
      success: true,
      message: "Expert query submitted successfully",
      data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.talkToExpertService.findAll();

    return {
      success: true,
      data,
    };
  }

  @Get(":id")
  async findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    const data = await this.talkToExpertService.findOne(id);

    return {
      success: true,
      data,
    };
  }
}
