import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/env')
  getEnv() {
    return {
      dummyVar1: process.env.DUMMY_VAR_1 || 'not set',
      dummyVar2: process.env.DUMMY_VAR_2 || 'not set',
    };
  }

  @Get('/')
  root() {
    return 'Hello from NestJS on Cloud Run!';
  }
}
