import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'; 
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({collection:'courses',timestamps:true})
export class Course{

    @Prop({type:String})
    _id: string;

    @Prop({required:true})
    courseId: string;

    @Prop({required:true})
    sourceLang: string;

    @Prop({required:true})
    targetLang: string;

    @Prop({required:true})
    title:string;

    @Prop()
    iconUrl:string;

    @Prop({default:true})
    isActive: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);