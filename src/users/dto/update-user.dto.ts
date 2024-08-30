import { Optional } from "@nestjs/common";

export class UpdateUserDto {
  @Optional()
  name: string;
  @Optional()
  email: string;
  @Optional()
  password: string;
  @Optional()
  phone: string;
}
