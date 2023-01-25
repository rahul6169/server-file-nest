import { Controller,Get, Injectable } from '@nestjs/common';
import { data } from './data';

@Controller('auth')
@Injectable()
export class DataController {
    
  @Get('signup')
  getName(){
    console.log(data)   
    return data
    
  }
  } 
   
