import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SentenceDocument = Sentence & Document;

@Schema({ collection: 'sentences' })
export class Sentence {
  @Prop({ required: true })
  text: string;
  @Prop()
  audioUrl: string; 
  @Prop()
  translation: string; 
}

export const SentenceSchema = SchemaFactory.createForClass(Sentence);
