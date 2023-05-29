import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { MerchantService } from './merchant.service';

@Controller()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post('createMerchant')
  async createMerchant(@Body() merchantData) {
    console.log(merchantData, 'dddd');
    const newMerchantData = await this.merchantService.createMerchant(
      merchantData?.formValues,
    );
    return newMerchantData;
  }

  @Get('getAllMerchants')
  async getAllMerchants() {
    return await this.merchantService.getAllMerchants();
  }

  @Put('getMerchant/:id?')
  async getMerchantById(@Body() body) {
    // console.log(body);
    return await this.merchantService.getMerchantById(body?.id);
  }
  @Put('updateMerchant')
  async updateMerchant(@Body() body) {
    // console.log('body', body);

    return await this.merchantService.updateMerchant(
      body?.formValues,
      body?.id,
    );
  }

  @Delete('deleteMerchant/:id?')
  async deleteMerchant(@Param() id) {
    // console.log(id?.id);
    return await this.merchantService.deleteMerchant(id?.id);
  }
}
