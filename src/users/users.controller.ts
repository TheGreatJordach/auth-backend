import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

import { User } from "./entity/user-entity";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserById(@Query("email") email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Get("/:all")
  getUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get("/:id")
  getUserByID(@Param("id") id: string) {
    console.log(typeof +id);
    return this.usersService.getUserById(+id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Patch("/:id")
  update(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(+id, body);
  }
}
