import { Args, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => Customer)
  async createCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.createCustomer(id);
  }
  @Query(() => Customer)
  async editCustomer(@Args('id') id: string): Promise<Customer> {
    return await this.customerService.editCustomer(id);
  }
}
