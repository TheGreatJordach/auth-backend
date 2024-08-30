import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entity/user-entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async createUser(body: CreateUserDto) {
    try {
      const user = this.userRepository.create(body);
      return await this.userRepository.save(user);
    } catch (error) {
      return `Failed to create user with data ${body}: ${error}`;
    }
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    try {
      return await this.userRepository.findBy({ id });
    } catch (error) {
      return null;
    }
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findBy({ email });
    if (user.length === 0) {
      throw new NotFoundException(`No user with email ${email} found`);
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userRepository.preload({
      id: +id,
      ...updateUserDto,
    });

    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    console.log(updatedUser);

    try {
      return await this.userRepository.save(updatedUser);
    } catch (error) {
      throw new Error("Failed to update user with data");
    }
  }

  deleteUser(id: number) {
    return `This service deletes a user with provided info : ${id}`;
  }
}
