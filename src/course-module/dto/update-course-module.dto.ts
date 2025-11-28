import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course-module.dto';

export class UpdateCourseModuleDto extends PartialType(CreateCourseDto) {}
