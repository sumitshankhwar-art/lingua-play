import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SentenceModuleService } from './sentence-module.service';
import { CreateSentenceModuleDto } from './dto/create-sentence-module.dto';
import { UpdateSentenceModuleDto } from './dto/update-sentence-module.dto';

@Controller('sentence-module')
export class SentenceModuleController {
  constructor(private readonly sentenceModuleService: SentenceModuleService) {}

  // @Post()
  // create(@Body() createSentenceModuleDto: CreateSentenceModuleDto) {
  //   return this.sentenceModuleService.create(createSentenceModuleDto);
  // }

  // @Get()
  // findAll() {
  //   return this.sentenceModuleService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sentenceModuleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSentenceModuleDto: UpdateSentenceModuleDto) {
  //   return this.sentenceModuleService.update(+id, updateSentenceModuleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sentenceModuleService.remove(+id);
  // }
}
