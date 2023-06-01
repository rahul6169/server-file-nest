import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  Name?: string;

  @Field({ nullable: true })
  employeeCount?: number;
}
