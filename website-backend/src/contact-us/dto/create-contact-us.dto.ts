import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
} from "class-validator";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Product Information",
  "Technical Support",
  "Account Support",
  "Partnership",
  "Billing",
  "Feedback",
  "Other",
] as const;

export class CreateContactUsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
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
  @IsIn(SUBJECT_OPTIONS)
  subject!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  message!: string;

  @IsBoolean()
  consent!: boolean;
}
