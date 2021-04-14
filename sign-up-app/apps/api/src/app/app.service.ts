import { Injectable } from '@nestjs/common';
import { Message, User } from '@sign-up-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getUser(): User {
    return {
      id: 1,
      firstName: 'New',
      lastName: 'User',
      email: 'newuser@shield.ai',
      password: '1234',
    };
  }
}
