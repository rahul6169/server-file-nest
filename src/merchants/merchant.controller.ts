import { Controller, Post, Body,Get } from '@nestjs/common';
import { merchantsData } from './merchant.constant';
import { MerchantService } from './merchant.service';

@Controller()

export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}
  @Post('createMerchant')
  async createMerchant(@Body() merchantData) {
    const newMerchantData= this.merchantService.createMerchant(merchantData)
   return newMerchantData;
  } 
    
  @Get('getAllMerchants')
  getAllMerchants(){
    
    return merchantsData
    
  }
  // @Put('editMerchant')
  // editMerchant(){

  // }

  
}



