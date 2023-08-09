import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RazorPayService } from './razorpay.service';
import { RazorPay } from './razorpay.model';
import { RazorPayDto } from './razorpay.dto';

@Resolver(() => RazorPay)
export class RazorPayResolver {
  constructor(private razorpayService: RazorPayService) {}
  @Mutation(() => RazorPay)
  async createPaymentOrder(
    @Args('amount') amount: number,
    @Args('currency') currency: string,
  ): Promise<RazorPayDto> {
    return this.razorpayService.createPaymentOrder(amount, currency);
  }
}
