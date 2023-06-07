import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeDto, FilterBySkill } from './employee.dto';
import { Employee } from './employee.model';
import { Prisma } from '@prisma/client';
import { Skill } from '../skills/skill.model';
import { Tag } from '../tags/tag.model';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmployee(data: EmployeeDto): Promise<Employee> {
    try {
      return this.prisma.employee.create({
        data: {
          ...data,
          skillsId: {
            set: data?.skillsId,
          },
        },
      });
    } catch (error) {
      if (error?.code === 'P2002') {
        throw new HttpException('Email already Exists', 500);
      }
      throw new HttpException(error, 500);
    }
  }
  async getEmployee(id: string): Promise<Employee> {
    return await this.prisma.employee.findUnique({
      where: { id: id },
      include: {
        skills: true,
      },
    });
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

    const employees = await this.prisma.employee.findMany({
      where: {
        ...filterQuery,
        archived: false,
      },
      include: {
        skills: true,
      },

      orderBy: [{ Name: 'asc' }],
    });
    return employees;
  }
  async deleteEmployee(id: string): Promise<Employee> {
    return await this.prisma.employee.update({
      where: { id },
      data: {
        archived: true,
      },
    });
  }
  async updateEmployee(data: EmployeeDto, id: string): Promise<Employee> {
    return await this.prisma.employee.update({
      where: { id: id },
      data: {
        ...data,
        skillsId: {
          set: data?.skillsId,
        },
      },
    });
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
          $match: {
            archived: false,
          },
        },
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
          $match: {
            'skill.archived': false,
          },
        },
        {
          $project: {
            id: { $toString: '$skill._id' },
            employeeCount: '$count',
            Name: '$skill.Name',
          },
        },
        {
          $sort: {
            employeeCount: -1,
          },
        },
        {
          $limit: 5,
        },
      ],
    });

    return skillWithCount as unknown as Skill[];
  }

  async getTopTagWithCount(): Promise<Tag[]> {
    const TagWithCount = await this.prisma.employee.aggregateRaw({
      pipeline: [
        {
          $match: {
            archived: false,
          },
        },
        {
          $lookup: {
            from: 'Skill',
            localField: 'skillsId',
            foreignField: '_id',
            as: 'skills',
          },
        },

        {
          $match: {
            'skills.archived': false,
          },
        },
        {
          $lookup: {
            from: 'Tag',
            localField: 'skills.tagIds',
            foreignField: '_id',
            as: 'tag',
          },
        },
        {
          $unwind: {
            path: '$tag',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $match: {
            'tag.archived': false,
          },
        },
        {
          $group: {
            _id: {
              tagIds: '$tag',
            },
            count: {
              $count: {},
            },
          },
        },
        {
          $project: {
            id: { $toString: '$_id.tagIds._id' },
            Name: '$_id.tagIds.Name',
            employeeCount: '$count',
          },
        },
        {
          $sort: {
            employeeCount: -1,
          },
        },
        {
          $limit: 5,
        },
      ],
    });

    console.log(TagWithCount);

    return TagWithCount as unknown as Tag[];
  }
}
