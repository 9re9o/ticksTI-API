import { Module } from '@nestjs/common';
import { CategorySpecializationsService } from './category-specializations.service';
import { CategorySpecializationsController } from './category-specializations.controller';

@Module({
  controllers: [CategorySpecializationsController],
  providers: [CategorySpecializationsService],
})
export class CategorySpecializationsModule {}
