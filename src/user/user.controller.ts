import { Controller, Get, Post, Body, Req, UseGuards, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/signUp')
    create(@Body() createUserDto: CreateUserDto) : Promise<User>{
      return this.userService.create(createUserDto);
    }

    @Post('/signIn')
    @HttpCode(200)
    read(@Body() createUserDto: CreateUserDto) : Promise<any>{
      return this.userService.read(createUserDto);
    }
} 
