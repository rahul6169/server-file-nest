import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchants/merchant.module';

@Module({
  imports: [
    MerchantModule,
    MongooseModule.forRoot(
      'mongodb+srv://Rahul6169:Rahul2002@cluster0.zroci3w.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
