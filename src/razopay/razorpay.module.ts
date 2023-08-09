import { Module } from '@nestjs/common';
import { RazorPayResolver } from './razorpay.resolver';
import { RazorPayService } from './razorpay.service';
import { RazzorpayController } from './merchant.controller';

@Module({
  providers: [RazorPayResolver, RazorPayService],
  exports: [RazorPayService],
  controllers: [RazzorpayController],
})
export class RazorPayModule {}
