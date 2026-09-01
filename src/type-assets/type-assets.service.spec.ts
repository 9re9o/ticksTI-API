import { Test, TestingModule } from '@nestjs/testing';
import { TypeequipmentService } from './type-equipment.service';

describe('TypeequipmentService', () => {
  let service: TypeequipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeequipmentService],
    }).compile();

    service = module.get<TypeequipmentService>(TypeequipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
