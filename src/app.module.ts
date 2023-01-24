import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth';
import { DataController } from './sendData';
@Module({
  imports: [],
  controllers: [AppController,AuthController,DataController],
  providers: [AppService],
})
export class AppModule {}
