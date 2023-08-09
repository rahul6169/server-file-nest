import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RazorPayDto {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => Number, { nullable: true })
  amount: number;

  @Field(() => String, { nullable: true })
  currency: string;
}
