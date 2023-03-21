import { Module } from '@nestjs/common';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantSchema } from './merchant.schema';
import { PrismaAppModule } from 'prisma/prisma.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Merchants', schema: MerchantSchema }]),
    PrismaAppModule,
  ],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}
