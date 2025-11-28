import { Module } from '@nestjs/common';
import { PackModuleService } from './pack-module.service';
import { PackModuleController } from './pack-module.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { PackSchema } from './pack.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pack', schema: PackSchema }]),
  ],
  controllers: [PackModuleController],
  providers: [PackModuleService],
})
export class PackModuleModule {}
