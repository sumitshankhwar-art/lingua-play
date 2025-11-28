import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './course.schema';
import { Model } from 'mongoose';

@Injectable()
export class CourseModuleService {

 constructor(@InjectModel('Course') private courseModel: Model<Course>) {}



  // create(createCourseModuleDto: CreateCourseModuleDto) {
  //   return 'This action adds a new courseModule';
  // }

 async findAll(): Promise<Course[]> {
    return this.courseModel.find({ isActive: true }).select('_id title iconUrl').exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} courseModule`;
  // }

  // update(id: number, updateCourseModuleDto: UpdateCourseModuleDto) {
  //   return `This action updates a #${id} courseModule`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} courseModule`;
  // }
}
