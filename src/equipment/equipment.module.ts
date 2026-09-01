import { Module } from '@nestjs/common';
import { equipmentService } from './equipment.service';
import { equipmentController } from './equipment.controller';

@Module({
  controllers: [equipmentController],
  providers: [equipmentService],
})
export class equipmentModule {}
