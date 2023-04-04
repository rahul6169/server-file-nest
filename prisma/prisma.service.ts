import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Customer } from 'src/customer/customer.model';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _customer: any;
  public get customer(): any {
    return this._customer;
  }
  public set customer(value: any) {
    this._customer = value;
  }
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
