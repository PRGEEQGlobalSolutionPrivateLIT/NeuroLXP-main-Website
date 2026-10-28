import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from "class-validator";

export class CreateTalkToExpertDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  fullName!: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z]{2}$/, {
    message: "Country code must be a valid 2-letter ISO country code",
  })
  countryCode!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{1,15}$/, {
    message: "Phone number must contain only digits and be 1-15 digits long",
  })
  phone!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  interest!: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  query?: string;

  @IsBoolean()
  consent!: boolean;
}
