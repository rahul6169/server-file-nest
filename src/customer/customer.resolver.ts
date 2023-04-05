import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';
import { CustomerProfile } from './customer.dto';
import { Console, log } from 'console';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Mutation(() => Customer)
  async createCustomer(
    @Args('createAuthUserDto') createAuthUserDto: CustomerProfile,
  ): Promise<Customer> {
    return await this.customerService.createCustomer(createAuthUserDto);
  }
  @Query(() => Customer)
  async getCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.getCustomer(id);
  }

  @Query(() => [Customer])
  async getAllCustomer(): Promise<Customer[]> {
    return await this.customerService.getAllCustomer();
  }

  @Mutation(() => Customer)
  async deleteCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.deleteCustomer(id);
  }
}
