import { Test, TestingModule } from '@nestjs/testing';
import { UserSpecializationsService } from './user-specializations.service';

describe('UserSpecializationsService', () => {
  let service: UserSpecializationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSpecializationsService],
    }).compile();

    service = module.get<UserSpecializationsService>(UserSpecializationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
