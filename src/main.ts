import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ValidationExceptionFilter } from '../shared/filters/validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const PORT = 3001;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ValidationExceptionFilter())
  await app.listen(PORT, () => Logger.log(`App listening on PORT ${PORT}`));
}
bootstrap();
