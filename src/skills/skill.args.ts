import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetSkillIdArgs {
  @Field(() => String)
  id: string;
}
