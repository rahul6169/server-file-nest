import { Controller, Post, Body } from '@nestjs/common';


@Controller('auth')

export class AuthController {
  data: any[] = [];
  
  @Post('signup')
  async signup(@Body() form) {
     this.data.push(form);
     console.log(this.data);
  } 
   
}



