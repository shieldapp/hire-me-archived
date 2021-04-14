import { Controller, Get } from '@nestjs/common';

import { Message, User } from '@sign-up-app/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('newuser')
  getUser(): User {
    return this.appService.getUser();
  }
}
