import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthorizationGuard)
  getAlls(): User[] {
    return this.userService.getAll();
  }
}
