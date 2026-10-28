import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow frontend requests to the backend
  app.enableCors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  // Global DTO validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = Number(process.env.PORT) || 4000;

  await app.listen(port, "0.0.0.0");

  console.log(`Backend running at http://localhost:${port}`);
  console.log(`Book Demo API: http://localhost:${port}/book-demo`);
}

bootstrap().catch((error) => {
  console.error("Failed to start backend:", error);
  process.exit(1);
});