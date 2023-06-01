import { Field, ObjectType } from '@nestjs/graphql';
import { Tag } from 'src/tags/tag.model';

@ObjectType()
export class Skill {
  @Field({ nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  Name?: string;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field({ nullable: true })
  employeeCount?: number;
}
