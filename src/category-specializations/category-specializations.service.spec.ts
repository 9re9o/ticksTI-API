import { Test, TestingModule } from '@nestjs/testing';
import { CategorySpecializationsService } from './category-specializations.service';

describe('CategorySpecializationsService', () => {
  let service: CategorySpecializationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorySpecializationsService],
    }).compile();

    service = module.get<CategorySpecializationsService>(CategorySpecializationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
