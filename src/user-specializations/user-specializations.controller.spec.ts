import { Test, TestingModule } from '@nestjs/testing';
import { UserSpecializationsController } from './user-specializations.controller';
import { UserSpecializationsService } from './user-specializations.service';

describe('UserSpecializationsController', () => {
  let controller: UserSpecializationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSpecializationsController],
      providers: [UserSpecializationsService],
    }).compile();

    controller = module.get<UserSpecializationsController>(UserSpecializationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
