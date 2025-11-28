import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PackDocument = Pack & Document;

@Schema({collection:'packs',timestamps:true})
export class Pack {

  @Prop({required:true,type:String})
    courseId:string;

  @Prop({ required: true })
  level: number;

  @Prop({ required: true })
  title: string; 

  @Prop()
  coverImage: string; 

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Sentence' }] })
  sentences: Types.ObjectId[];

}

export const PackSchema = SchemaFactory.createForClass(Pack);
