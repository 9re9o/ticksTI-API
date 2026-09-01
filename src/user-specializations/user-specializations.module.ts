import { Module } from '@nestjs/common';
import { UserSpecializationsService } from './user-specializations.service';
import { UserSpecializationsController } from './user-specializations.controller';

@Module({
  controllers: [UserSpecializationsController],
  providers: [UserSpecializationsService],
})
export class UserSpecializationsModule {}
