import { IsNotEmpty, IsString } from 'class-validator';

export class CustomExifCreateDto {
  @IsString()
  @IsNotEmpty()
  tag!: string;
  description!: string;
}

export class CustomExifUpdateDto {
  @IsString()
  @IsNotEmpty()
  tag!: string;
  description!: string;
}

export class CustomExifCreateResponseDto {
  customExif!: CustomExifResponseDto;
}

export class CustomExifResponseDto {
  id!: string;
  tag!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
