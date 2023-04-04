import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerProfile } from './customer.dto';
import { Console, log } from 'console';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => Customer)
  async dummy() {
    return;
  }

  @Mutation(() => Customer)
  async createCustomer(
    @Args('createAuthUserDto') createAuthUserDto: CustomerProfile,
  ): Promise<Customer> {
    console.log(createAuthUserDto, 'sfad');

    return await this.customerService.createCustomer(createAuthUserDto);
  }
  @Query(() => Customer)
  async getCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.getCustomer(id);
  }

  @Mutation(() => Customer)
  async deleteCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.deleteCustomer(id);
  }
}
