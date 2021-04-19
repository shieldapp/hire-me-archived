import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { Message, User } from '@sign-up-app/api-interfaces';

import { AppService } from './app.service';

@Controller('users')
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllUsers(): Array<User> {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number): User {
    return this.appService.getUser(id);
  }

  @Post('add-user')
  postUser(@Body() user: User): User  {
    
    return this.appService.addUser(user);
  }

  @Put('update-user:id')
  updateUser(@Param('id') id: number, @Body() user: User): User {

    this.appService.updateUser(id, user);
    
    return user
    // return this.appService.addUser(user)
  }

  @Delete('delete-user:id')
  deleteUser(@Param('id') id: number): User {

    const deletedUser: User = this.appService.getUser(id);
    this.appService.deleteUser(id);

    return deletedUser
    // return this.appService.deleteUser(user)
  }
}
