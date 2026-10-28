import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { BookDemoController } from "./book-demo.controller";
import { BookDemoService } from "./book-demo.service";
import { BookDemo } from "./entities/book-demo.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([BookDemo]),
  ],
  controllers: [
    BookDemoController,
  ],
  providers: [
    BookDemoService,
  ],
  exports: [
    BookDemoService,
  ],
})
export class BookDemoModule {}