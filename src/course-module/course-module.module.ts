import { Module } from '@nestjs/common';
import { CourseModuleService } from './course-module.service';
import { CourseModuleController } from './course-module.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [CourseModuleController],
  providers: [CourseModuleService],
})
export class CourseModuleModule {}

