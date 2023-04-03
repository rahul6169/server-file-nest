import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchants/merchant.module';
import { CustomerModule } from './customer/customer.module';
import { GraphQlModule } from './graphql/graphql.module';

@Module({
  imports: [
    GraphQlModule,
    CustomerModule,
    MerchantModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
