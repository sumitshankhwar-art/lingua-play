import { Test, TestingModule } from '@nestjs/testing';
import { PackModuleService } from './pack-module.service';

describe('PackModuleService', () => {
  let service: PackModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackModuleService],
    }).compile();

    service = module.get<PackModuleService>(PackModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
