import { Controller, Get, Delete, Param, ConsoleLogger } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('username/:username')
  findByUsername(@Param('username') username: string): Promise<User> {
    return this.userService.findByUsername(username);
  }

  @Get(':id')
  findUser(@Param('id') id: number): Promise<User> {
    return this.userService.findUser(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
