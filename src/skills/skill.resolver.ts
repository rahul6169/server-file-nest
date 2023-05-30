import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetSkillIdArgs } from './skill.args';
import { SkillDto } from './skill.dto';
import { Skill } from './skill.model';
import { SkillService } from './skill.service';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private skillService: SkillService) {}
  @Mutation(() => Skill)
  async createSkill(
    @Args('createskill') createskill: SkillDto,
  ): Promise<Skill> {
    return await this.skillService.createSkill(createskill);
  }
  @Query(() => Skill)
  async getSkill(@Args() args: GetSkillIdArgs): Promise<Skill> {
    return await this.skillService.getSkill(args);
  }

  @Query(() => [Skill])
  async getAllSkills(): Promise<Skill[]> {
    return await this.skillService.getAllSkills();
  }

  @Query(() => [Skill])
  async updateSkill(
    @Args('id') id: string,
    @Args('updateSkill') updateSkill: SkillDto,
  ): Promise<Skill> {
    return await this.skillService.updateSkill(updateSkill, id);
  }
  @Mutation(() => Skill)
  async deleteSkill(@Args('id') id: string): Promise<Skill> {
    return await this.skillService.deleteSkill(id);
  }
}
