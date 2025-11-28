import { Injectable } from '@nestjs/common';
import { CreateSentenceModuleDto } from './dto/create-sentence-module.dto';
import { UpdateSentenceModuleDto } from './dto/update-sentence-module.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Sentence } from './sentence.schema';
import { Model } from 'mongoose';
@Injectable()
export class SentenceModuleService {

  constructor(@InjectModel('Sentence') private sentenceModel: Model<Sentence>) {}

  // create(createSentenceModuleDto: CreateSentenceModuleDto) {
  //   return 'This action adds a new sentenceModule';
  // }

  // findAll() {
  //   return `This action returns all sentenceModule`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} sentenceModule`;
  // }

  // update(id: number, updateSentenceModuleDto: UpdateSentenceModuleDto) {
  //   return `This action updates a #${id} sentenceModule`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} sentenceModule`;
  // }
}
