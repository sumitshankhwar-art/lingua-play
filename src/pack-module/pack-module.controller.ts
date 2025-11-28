import { UseGuards,Controller, Get, Post, Body, Patch, Param, Query,Req } from '@nestjs/common';
import { PackModuleService } from './pack-module.service';
import { CreatePackModuleDto } from './dto/create-pack-module.dto';
import { UpdatePackModuleDto } from './dto/update-pack-module.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) 
@Controller('pack')
export class PackModuleController {
  constructor(private readonly packModuleService: PackModuleService) {}

  // @Post()
  // create(@Body() createPackModuleDto: CreatePackModuleDto) {
  //   return this.packModuleService.create(createPackModuleDto);
  // }
  
  @Get()
  async getPacks(
    @Param('courseId') courseId: string,
    @Query('level') level?: number,
    @Req() req?: any, 
  ) {
    const userId = req?.user?.sub;
    return this.packModuleService.findPacks(courseId, level ? Number(level) : undefined, userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.packModuleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePackModuleDto: UpdatePackModuleDto) {
  //   return this.packModuleService.update(+id, updatePackModuleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.packModuleService.remove(+id);
  // }
}
