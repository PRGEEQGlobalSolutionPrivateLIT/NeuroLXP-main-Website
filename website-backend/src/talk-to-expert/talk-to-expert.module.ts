import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { TalkToExpertController } from "./talk-to-expert.controller";
import { TalkToExpertService } from "./talk-to-expert.service";
import { TalkToExpert } from "./entities/talk-to-expert.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([TalkToExpert]),
  ],
  controllers: [
    TalkToExpertController,
  ],
  providers: [
    TalkToExpertService,
  ],
  exports: [
    TalkToExpertService,
  ],
})
export class TalkToExpertModule {}