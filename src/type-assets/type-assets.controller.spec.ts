import { Test, TestingModule } from '@nestjs/testing';
import { TypeequipmentController } from './type-equipment.controller';
import { TypeequipmentService } from './type-equipment.service';

describe('TypeequipmentController', () => {
  let controller: TypeequipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeequipmentController],
      providers: [TypeequipmentService],
    }).compile();

    controller = module.get<TypeequipmentController>(TypeequipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
