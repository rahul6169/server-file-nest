import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Customer } from './customer.model';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomer(id: string): Promise<Customer> {
    return (await this.prisma.customer.create({
      where: { id: id },
    })) as unknown as Customer;
  }

  async editCustomer(id: string): Promise<Customer> {
    return (await this.prisma.customer.findUnique({
      where: { id: id },
    })) as unknown as Customer;
  }
}
