import { Test, TestingModule } from '@nestjs/testing';
import { CategorySpecializationsController } from './category-specializations.controller';
import { CategorySpecializationsService } from './category-specializations.service';

describe('CategorySpecializationsController', () => {
  let controller: CategorySpecializationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorySpecializationsController],
      providers: [CategorySpecializationsService],
    }).compile();

    controller = module.get<CategorySpecializationsController>(CategorySpecializationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
