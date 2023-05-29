import { Field, ObjectType } from '@nestjs/graphql';
import { Tag } from 'src/tags/tag.model';

@ObjectType()
export class Skill {
  @Field()
  id?: string;

  @Field({ defaultValue: false })
  archived: boolean;

  @Field({ nullable: true })
  Name: string;

  @Field(() => [Tag], { nullable: true })
  tags: Tag[];

  @Field({ nullable: true })
  count?: number;
}
