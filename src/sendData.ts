import { Controller,Get } from '@nestjs/common';
import { AuthController } from './auth';

@Controller('data')

export class DataController {
    
  data:any[]=[{"userName":"Rahul","email":"rahul@gmail.com","number":"9976078760","contactName":"Rahul"}]
  @Get()
  getData(){
    return this.data
  }
  } 
   
