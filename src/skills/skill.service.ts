import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Skill } from './skill.model';
import { SkillDto } from './skill.dto';

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}

  async createSkill(data: SkillDto): Promise<Skill> {
    return this.prisma.skill.create({
      data: {
        ...data,
        tagIds: {
          set: data?.tagIds,
        },
      },
    }) as unknown as Skill;
  }
  async getSkill(id: string): Promise<Skill> {
    return (await this.prisma.skill.findUnique({
      where: { id: id },
      include: {
        tags: true,
      },
    })) as Skill;
  }

  async getAllSkills(): Promise<Skill[]> {
    const skills = (await this.prisma.skill.findMany({
      where: {
        archived: false,
      },
      include: {
        tags: true,
      },

      orderBy: [{ Name: 'asc' }, { id: 'asc' }],
    })) as Skill[];
    return skills as Skill[];
  }
  async deleteSkill(id: string): Promise<Skill> {
    return (await this.prisma.skill.update({
      where: { id },
      data: {
        archived: true,
      },
    })) as unknown as Skill;
  }
  async updateSkill(data: SkillDto, id: string): Promise<Skill> {
    return (await this.prisma.skill.update({
      where: { id: id },
      data: {
        Name: data?.Name,
      },
    })) as unknown as Skill;
  }
}
