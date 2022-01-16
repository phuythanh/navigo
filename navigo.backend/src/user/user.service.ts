import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      email: 'phuythanh@gmail.com',
      password: '123456',
      fullName: 'thanh phan2',
    },
  ];
  getAll() {
    return this.users;
  }
}
