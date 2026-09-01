import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import {ValidationPipe} from '@nestjs/common';



const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //ejecute validaciones de los DTOs
  app.useGlobalPipes(
    new ValidationPipe()
  );


  await app.listen(port ?? 3000);
  console.log(`Servidor running at:  http://localhost:${port}`);
}
bootstrap();
