import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('rpay')
export class RazzorpayController {
  @Post('test')
  async createMerchant(@Body() merchantData) {
    console.log(merchantData, 'dddd');
  }
}
