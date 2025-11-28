import { Test, TestingModule } from '@nestjs/testing';
import { PackModuleController } from './pack-module.controller';
import { PackModuleService } from './pack-module.service';

describe('PackModuleController', () => {
  let controller: PackModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackModuleController],
      providers: [PackModuleService],
    }).compile();

    controller = module.get<PackModuleController>(PackModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
