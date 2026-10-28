import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from "class-validator";

export class CreateBookDemoDto {
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  countryCode!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{1,15}$/, {
    message:
      "Phone number must contain only digits and be 1-15 digits long",
  })
  phone!: string;

  @IsDateString()
  @IsNotEmpty()
  demoDate!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?:[01]\d|2[0-3])\s*:\s*[0-5]\d$/, {
    message: "Demo time must be in HH : MM format",
  })
  demoTime!: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  message?: string;

  @IsBoolean()
  @IsNotEmpty()
  consent!: boolean;
}