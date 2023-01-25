import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MerchantModule } from './merchants/merchant.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  await app.listen(5000);
}
bootstrap();