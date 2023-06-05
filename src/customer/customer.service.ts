import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Customer } from './customer.model';
import { CustomerProfile } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomer(data: CustomerProfile): Promise<Customer> {
    return this.prisma.customer.create({
      data,
    });
  }
  async getCustomer(id: string): Promise<Customer> {
    return await this.prisma.customer.findUnique({
      where: { id: id },
    });
  }

  async getAllCustomer(): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany({
      where: {
        archived: false,
      },

      orderBy: [{ createdAt: 'desc' }, { id: 'asc' }],
    });
    return customers;
  }

  async deleteCustomer(id: string): Promise<Customer> {
    return await this.prisma.customer.delete({
      where: { id: id },
    });
  }

  async stringReturnType(id: string): Promise<String> {
    if (id) return 'user Created';
  }
}
