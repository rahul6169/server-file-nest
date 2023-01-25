import { Controller, Post, Body, Injectable } from '@nestjs/common';
import { data } from './data';

@Controller('auth')
@Injectable()
export class AuthController {
  
  @Post('signup')

  async signup(@Body() form) {
    
     data?.push(form);
     console.log(data);
     return form

  } 

  
}



