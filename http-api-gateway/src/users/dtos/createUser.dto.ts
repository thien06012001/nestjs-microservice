import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @MaxLength(64)
    displayName?: string;
}