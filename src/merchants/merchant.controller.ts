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
    console.log(merchantData);
    const newMerchantData = this.merchantService.createMerchant(
      merchantData?.formValues,
    );
    return newMerchantData;
  }

  @Get('getAllMerchants')
  getAllMerchants() {
    return this.merchantService.getAllMerchants();
  }

  @Put('getMerchant/:id?')
  getMerchantById(@Body() body) {
    // console.log(body);
    return this.merchantService.getMerchantById(body?.id);
  }
  @Put('updateMerchant')
  updateMerchant(@Body() body) {
    console.log('body', body);

    return this.merchantService.updateMerchant(body?.formValues, body?.id);
  }

  @Delete('deleteMerchant/:id?')
  deleteMerchant(@Param() id) {
    // console.log(id?.id);
    return this.merchantService.deleteMerchant(id?.id);
  }
}
