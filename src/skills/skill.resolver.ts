import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { Skill } from './skill.model';
import { SkillDto } from './skill.dto';

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
  async getSkill(@Args('id') id: string): Promise<Skill> {
    return await this.skillService.getSkill(id);
  }

  @Query(() => [Skill])
  async getAllSkills(): Promise<Skill[]> {
    return await this.skillService.getAllSkills();
  }

  @Query(() => [Skill])
  async updateSkill(
    @Args('updateSkill') @Args('id') id: string,
    updateSkill: SkillDto,
  ): Promise<Skill> {
    return await this.skillService.updateSkill(updateSkill, id);
  }
  @Mutation(() => Skill)
  async deleteSkill(@Args('id') id: string): Promise<Skill> {
    return await this.skillService.deleteSkill(id);
  }
}
