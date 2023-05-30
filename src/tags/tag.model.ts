import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tag {
  @Field()
  id: string;

  @Field({ defaultValue: false })
  archived: boolean;

  @Field({ nullable: true })
  Name?: string;

  @Field({ nullable: true })
  employeeCount?: number;
}
