import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TagDto } from './tag.dto';
import { Tag } from './tag.model';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  async createTag(data: TagDto): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    });
  }
  async getTag(id: string): Promise<Tag> {
    return await this.prisma.tag.findUnique({
      where: { id: id },
    });
  }

  async getAllTags(): Promise<Tag[]> {
    const Tags = await this.prisma.tag.findMany({
      where: {
        archived: false,
      },
    });
    return Tags;
  }
  async deleteTag(id: string): Promise<Tag> {
    return await this.prisma.tag.update({
      where: { id },
      data: {
        archived: true,
      },
    });
  }
  async updateTag(data: TagDto, id: string): Promise<Tag> {
    return await this.prisma.tag.update({
      where: { id: id },
      data: data,
    });
  }
}
