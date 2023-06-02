import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class TagDto {
  @Field(() => String, { nullable: true })
  Name?: string;
}
