import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class RazorPay {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => Number, { nullable: true })
  amount: number;

  @Field(() => String, { nullable: true })
  orderId: string;
}
