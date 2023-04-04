import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id?: string;

  @Field({ defaultValue: false })
  archived: boolean;

  @Field({ nullable: true })
  userName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  number?: string;

  @Field({ nullable: true })
  contactName?: string;

  @Field({ nullable: true })
  contactEmail?: string;

  @Field({ nullable: true })
  contactPhoneNumber?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
