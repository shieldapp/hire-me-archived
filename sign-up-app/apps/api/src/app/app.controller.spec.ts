import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@sign-up-app/api-interfaces';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let user: User;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    user = {   
      firstName: 'New', 
      lastName: 'User', 
      email: 'newuser@shield.ai', 
      password: '1234'              
    }

  });

  describe('getUsers', () => {
    it('should return "Array<Users> with 2 User objects"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllUsers()).toEqual(
        expect.arrayContaining([      
          expect.objectContaining(user)
        ])
      )
    });
  });

  describe('getUser', () => {
    it('should return "User object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getUser(0)).toEqual(user);
    });
  });

  describe('postUser', () => {
    it('should return "User object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.postUser({   
        firstName: 'Another', 
        lastName: 'User', 
        email: 'another@shield.ai', 
        password: '0011'              
      })).toEqual(3);
    });
  });

  describe('updateUser', () => {
    it('should return "User object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.updateUser(1, user)).toEqual(user);
    });
  });

  describe('deleteUser', () => {
    it('should return "User object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.deleteUser(0)).toEqual(user);
    });
  });
});
