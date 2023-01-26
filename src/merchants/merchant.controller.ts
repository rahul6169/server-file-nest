import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { merchantsData } from './merchant.constant';
import { MerchantService } from './merchant.service';

@Controller()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Post('createMerchant')
  async createMerchant(@Body() merchantData) {
    console.log(merchantData)
    const newMerchantData = this.merchantService.createMerchant(merchantData?.formValues);
    return newMerchantData;
  }

  @Get('getAllMerchants')
  getAllMerchants() {
    return  this.merchantService.getAllMerchants();
  }

  @Put('getMerchant/:id?')

updateMerchant( @Body() body) {
   console.log(body)
  
  
    return this.merchantService.updateMerchant(body?.id);
}
}
