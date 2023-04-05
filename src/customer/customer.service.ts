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
    return (await this.prisma.customer.findUnique({
      where: { id: id },
    })) as unknown as Customer;
  }

  async getAllCustomer(): Promise<Customer[]> {
    const customers = (await this.prisma.customer.findMany({
      where: {
        archived: false,
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'asc' }],
    })) as Customer[];
    return customers as unknown as Customer[];
  }

  async deleteCustomer(id: string): Promise<Customer> {
    return (await this.prisma.customer.delete({
      where: { id: id },
    })) as Customer;
  }
}
