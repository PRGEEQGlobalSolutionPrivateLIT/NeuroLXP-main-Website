
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { BookDemoModule } from "./book-demo/book-demo.module";
import { TalkToExpertModule } from "./talk-to-expert/talk-to-expert.module";
import { ContactUsModule } from "./contact-us/contact-us.module";
import { EmailModule } from "./email/email.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      autoLoadEntities: true,
      synchronize: true,
    }),

    BookDemoModule,
    TalkToExpertModule,
    ContactUsModule,
    EmailModule,
  ],
})
export class AppModule {}
