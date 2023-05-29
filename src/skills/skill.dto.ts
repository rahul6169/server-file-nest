import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class SkillDto {
  @Field({ nullable: true })
  Name: string;

  @Field(() => [String], { nullable: true })
  tagIds: string[];
}
