import { Test, TestingModule } from '@nestjs/testing';
import { SentenceModuleController } from './sentence-module.controller';
import { SentenceModuleService } from './sentence-module.service';

describe('SentenceModuleController', () => {
  let controller: SentenceModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SentenceModuleController],
      providers: [SentenceModuleService],
    }).compile();

    controller = module.get<SentenceModuleController>(SentenceModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
