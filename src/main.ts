import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port ?? 3000);

  console.log(`Servidor running at:  http://localhost:${port}`);
}
bootstrap();
