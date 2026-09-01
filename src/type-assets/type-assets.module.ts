import { Module } from '@nestjs/common';
import { TypeequipmentService } from './type-equipment.service';
import { TypeequipmentController } from './type-equipment.controller';

@Module({
  controllers: [TypeequipmentController],
  providers: [TypeequipmentService],
})
export class TypeequipmentModule {}
