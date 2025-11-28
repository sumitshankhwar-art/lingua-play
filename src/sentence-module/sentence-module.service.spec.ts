import { Test, TestingModule } from '@nestjs/testing';
import { SentenceModuleService } from './sentence-module.service';

describe('SentenceModuleService', () => {
  let service: SentenceModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SentenceModuleService],
    }).compile();

    service = module.get<SentenceModuleService>(SentenceModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
