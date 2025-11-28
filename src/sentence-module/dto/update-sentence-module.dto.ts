import { PartialType } from '@nestjs/mapped-types';
import { CreateSentenceModuleDto } from './create-sentence-module.dto';

export class UpdateSentenceModuleDto extends PartialType(CreateSentenceModuleDto) {}
