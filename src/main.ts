import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080; // Cloud Run exposes PORT
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
