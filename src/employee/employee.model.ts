import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Skill } from '../skills/skill.model';
@ObjectType()
export class Employee {
  @Field({ nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  Email?: string;

  @Field(() => String, { nullable: true })
  Phone?: string;

  @Field(() => Date, { nullable: true })
  doj?: Date;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => Number, { nullable: true })
  age?: number;

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}
@ObjectType()
export class employeeCount {
  @Field(() => String, { nullable: true })
  skills?: string;
  @Field(() => Float, { nullable: true })
  count?: number;
}
