import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CustomerProfile {
  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  number?: string;

  @Field(() => Number, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  contactName?: string;

  @Field({ nullable: true })
  contactEmail?: string;

  @Field({ nullable: true })
  contactPhoneNumber?: string;
}
