import { PartialType } from '@nestjs/mapped-types';
import { CreatePackModuleDto } from './create-pack-module.dto';

export class UpdatePackModuleDto extends PartialType(CreatePackModuleDto) {}
