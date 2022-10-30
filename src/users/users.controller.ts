import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  users() {
    return this.usersService.getUsers();
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: number) {
    return this.usersService.getUserById(userId);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put('/:userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(userId, payload);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') userId: number) {
    return this.usersService.delete(userId);
  }
}
