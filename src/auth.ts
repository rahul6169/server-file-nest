import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() form) {
    
    console.log(form)
  }
}
