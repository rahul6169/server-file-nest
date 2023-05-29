import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class TagDto {
  @Field({ nullable: true })
  Name: string;
}
