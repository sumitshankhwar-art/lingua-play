import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  courseId: string;

  @IsString()
  sourceLang: string;

  @IsString()
  targetLang: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  iconUrl?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
