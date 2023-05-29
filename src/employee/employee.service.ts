import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeDto, FilterBySkill } from './employee.dto';
import { Employee } from './employee.model';
import { Prisma } from '@prisma/client';
import { Skill } from 'src/skills/skill.model';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployee(data: EmployeeDto): Promise<Employee> {
    return this.prisma.employee.create({
      data: {
        ...data,
        skillsId: {
          set: data?.skillsId,
        },
      },
    }) as unknown as Employee;
  }
  async getEmployee(id: string): Promise<Employee> {
    return (await this.prisma.employee.findUnique({
      where: { id: id },
      include: {
        skills: true,
      },
    })) as unknown as Employee;
  }

  async getAllEmployee(filter: FilterBySkill): Promise<Employee[]> {
    let filterQuery: Prisma.EmployeeWhereInput = {};
    if (filter?.skillId) {
      filterQuery = {
        ...filterQuery,
        skillsId: {
          hasSome: filter?.skillId,
        },
      };
    }

    const employees = (await this.prisma.employee.findMany({
      where: {
        ...filterQuery,
        archived: false,
      },
      include: {
        skills: true,
      },

      orderBy: [{ Name: 'asc' }, { id: 'asc' }],
    })) as unknown as Employee[];
    return employees as unknown as Employee[];
  }
  async deleteEmployee(id: string): Promise<Employee> {
    return (await this.prisma.employee.update({
      where: { id },
      data: {
        archived: true,
      },
    })) as unknown as Employee;
  }
  async updateEmployee(data: EmployeeDto, id: string): Promise<Employee> {
    return (await this.prisma.employee.update({
      where: { id: id },
      data: {
        ...data,
        skillsId: {
          push: data?.skillsId,
        },
      },
    })) as unknown as Employee;
  }

  async getEmployeeCount(): Promise<Number> {
    return await this.prisma.employee.count({
      where: {
        archived: false,
      },
    });
  }

  async getTopSkillsWithCount(): Promise<Skill[]> {
    const skillWithCount = await this.prisma.employee.aggregateRaw({
      pipeline: [
        {
          $unwind: {
            path: '$skillsId',
            includeArrayIndex: 'string',
            preserveNullAndEmptyArrays: false,
          },
        },
        {
          $group: {
            _id: {
              _id: '$skillsId',
            },
            count: {
              $count: {},
            },
          },
        },
        {
          $project: {
            _id: '$_id._id',
            count: '$count',
          },
        },
        {
          $lookup: {
            from: 'Skill',
            localField: '_id',
            foreignField: '_id',
            as: 'skill',
          },
        },
        {
          $unwind: {
            path: '$skill',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: '$skill._id',
            count: '$count',
            Name: '$skill.Name',
          },
        },
      ],
    });

    console.log(skillWithCount);

    return skillWithCount as unknown as Skill[];
  }
}
