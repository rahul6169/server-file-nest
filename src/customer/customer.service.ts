import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Customer } from './customer.model';
import { CustomerProfile } from './customer.dto';
import { Merchant } from 'src/merchants/merchant.constant';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomer(data: CustomerProfile): Promise<Customer> {
    return this.prisma.customer.create({
      data,
    });
  }

  async getCustomer(id: string): Promise<Customer> {
    return (await this.prisma.merchants.findUnique({
      where: { id: id },
    })) as unknown as Customer;
  }
}
