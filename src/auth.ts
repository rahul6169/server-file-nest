import { Controller, Post, Body, Get } from '@nestjs/common';


@Controller('auth')

export class AuthController {
  
  @Post('signup')
  async signup(@Body() form) {
     let data=[]
    
     data.push(form);
     console.log(data);
  } 
}


