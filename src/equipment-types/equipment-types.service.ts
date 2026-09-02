import { Injectable } from '@nestjs/common';
import { CreateequipmentTypeDto } from './dto/create-equipment-type-asset.dto';
import { UpdateequipmentTypeDto } from './dto/update-equipment-type-asset.dto';

@Injectable()
export class EquipmentTypesService {
  create(createequipmentTypeDto: CreateequipmentTypeDto) {
    return 'This action adds a new equipmentType';
  }

  findAll() {
    return `This action returns all equipmentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipmentType`;
  }

  update(id: number, updateequipmentTypeDto: UpdateequipmentTypeDto) {
    return `This action updates a #${id} equipmentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipmentType`;
  }
}
