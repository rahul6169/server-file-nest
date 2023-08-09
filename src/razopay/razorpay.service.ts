import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RazorPayDto } from './razorpay.dto';
import Razorpay from 'razorpay';

@Injectable()
export class RazorPayService {
  constructor(private readonly prisma: PrismaService) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  async createPaymentOrder(
    amount: number,
    currency = 'INR',
  ): Promise<RazorPayDto> {
    const instance = new Razorpay({
      key_id: 'rzp_test_4xcvSagUAjt2Wl',
      key_secret: 'uUEZBl3mMDAklV5qn11Z471H',
    });
    // const bfCode = await this.bfCounterService.getBfCode(BFCounterType.ORDER)
    const order = await instance.orders.create({
      amount: Number((amount * 100).toFixed(0)),
      currency,
      // receipt: bfCode,
    });
    console.log(order);
    if (!order) throw new Error();
    return (await this.prisma.razorpay.create({
      data: {
        amount: order?.amount as any,
        orderId:order?.id
      },
    })) as unknown as any;
  }
}
