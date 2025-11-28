import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserProgressDocument = UserProgress & Document;

@Schema({ collection: 'userProgress', timestamps: true })
export class UserProgress {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  courseId: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Pack' }], default: [] })
  completedPackIds: Types.ObjectId[];
}

export const UserProgressSchema = SchemaFactory.createForClass(UserProgress);
