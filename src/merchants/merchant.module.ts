import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantSchema } from './merchant.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Merchants', schema: MerchantSchema }]),
  ],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}
