import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setUpDocument } from './swagger';

dotenv.config();

async function bootstrap() {
  const { PORT } = process.env;

  const app = await NestFactory.create(AppModule);

  setUpDocument(app);

  await app.listen(PORT);
}

bootstrap();
