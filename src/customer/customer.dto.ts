import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CustomerProfile {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  countryCode?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field(() => String, { nullable: true })
  addressLine?: string;
}
