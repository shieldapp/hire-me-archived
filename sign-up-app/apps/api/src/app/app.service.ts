import { Injectable } from '@nestjs/common';
import { Message, User } from '@sign-up-app/api-interfaces';

@Injectable()
export class AppService {

  users: Array<User> = [
    {
      firstName: 'New',
      lastName: 'User',
      email: 'newuser@shield.ai',
      password: '1234',
    },
    {
      firstName: 'Old',
      lastName: 'Baws',
      email: 'oldbaws@shield.ai',
      password: '4321',
    }
  ];

  // reference; delete before submission
  getData(): Message {
    return { message: 'Welcome to Shield Sign-Up!' };
  }

  getUser(id: number): User {
    
    return this.users[id];
  }

  getUsers(): Array<User> {

    return this.users;
  }

  addUser(user: User): number {
    this.users.push(user);

    return this.users.length;
  }

  updateUser(id: number, user: User): User {
    this.users[id] = user;

    return user;
  }

  deleteUser(id: number): User {

    const deletedUser: User = this.users[id];
    this.users.splice(id, 1);

    return deletedUser;
  }
}
