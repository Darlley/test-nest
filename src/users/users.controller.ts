import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/users/new')
  create(@Body() user: CreateUserDto) {
    if (!user?.name)
      throw new BadRequestException('Informe o nome do usuário!');
    if (!user?.email)
      throw new BadRequestException('Informe o email do usuário!');

    this.usersService.create(user);
    return user;
  }
}
