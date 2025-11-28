import { Module } from '@nestjs/common';
import { SentenceModuleService } from './sentence-module.service';
import { SentenceModuleController } from './sentence-module.controller';
import { SentenceSchema } from './sentence.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sentence', schema: SentenceSchema }]),
  ],  
  controllers: [SentenceModuleController],
  providers: [SentenceModuleService],
})
export class SentenceModuleModule {}
