import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @Length(5, 50)
  name: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  password: string;
  @IsOptional()
  @IsPhoneNumber("MA")
  phone: string;
}
