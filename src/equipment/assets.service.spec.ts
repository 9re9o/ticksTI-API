import { Test, TestingModule } from '@nestjs/testing';
import { equipmentService } from './equipment.service';

describe('equipmentService', () => {
  let service: equipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [equipmentService],
    }).compile();

    service = module.get<equipmentService>(equipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
