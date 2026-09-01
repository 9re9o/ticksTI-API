import { Test, TestingModule } from '@nestjs/testing';
import { equipmentController } from './equipment.controller';
import { equipmentService } from './equipment.service';

describe('equipmentController', () => {
  let controller: equipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [equipmentController],
      providers: [equipmentService],
    }).compile();

    controller = module.get<equipmentController>(equipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
