import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoleType } from 'src/user/enums/user-role.enum';
export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsEnum(UserRoleType)
  role: UserRoleType;

  @ApiProperty()
  @IsString()
  password: string;
}
