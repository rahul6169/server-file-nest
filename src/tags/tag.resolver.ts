import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { TagDto } from './tag.dto';
import { Tag } from './tag.model';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private tagService: TagService) {}
  @Mutation(() => Tag)
  async createTag(@Args('createTag') createTag: TagDto): Promise<Tag> {
    return await this.tagService.createTag(createTag);
  }
  @Query(() => Tag)
  async getTag(@Args('id') id: string): Promise<Tag> {
    return await this.tagService.getTag(id);
  }

  @Query(() => [Tag])
  async getAllTags(): Promise<Tag[]> {
    return await this.tagService.getAllTags();
  }

  @Query(() => [Tag])
  async updateTag(
    @Args('updateTag') @Args('id') id: string,
    updateTag: TagDto,
  ): Promise<Tag> {
    return await this.tagService.updateTag(updateTag, id);
  }
  @Mutation(() => Tag)
  async deleteTag(@Args('id') id: string): Promise<Tag> {
    return await this.tagService.deleteTag(id);
  }
}
