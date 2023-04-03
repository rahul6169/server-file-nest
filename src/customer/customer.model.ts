import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id?: string;

  @Field({ defaultValue: false })
  archived: boolean;

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

  @Field()
  lastLoginAt?: Date;

  @Field()
  createdAt?: Date;
}
