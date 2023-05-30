import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeDto {
  @Field(() => String, { nullable: true })
  Name?: string;

  @Field(() => String, { nullable: true })
  Email?: string;

  @Field(() => String, { nullable: true })
  Phone?: string;

  @Field(() => Date, { nullable: true })
  doj?: Date;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => [String], { nullable: true })
  skillsId?: string[];
}

@InputType()
export class FilterBySkill {
  @Field(() => String, { nullable: true })
  skillId?: string;
}
