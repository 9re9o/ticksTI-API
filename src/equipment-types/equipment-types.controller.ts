import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentTypesService } from './equipment-types.service';
import { CreateequipmentTypeDto } from './dto/create-equipment-type-asset.dto';
import { UpdateequipmentTypeDto } from './dto/update-equipment-type-asset.dto';

@Controller('type-equipment')
export class EquipmentTypesController {
  constructor(private readonly EquipmentTypesService: EquipmentTypesService) {}

  @Post()
  create(@Body() createequipmentTypeDto: CreateequipmentTypeDto) {
    return this.EquipmentTypesService.create(createequipmentTypeDto);
  }

  @Get()
  findAll() {
    return this.EquipmentTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EquipmentTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateequipmentTypeDto: UpdateequipmentTypeDto) {
    return this.EquipmentTypesService.update(+id, updateequipmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EquipmentTypesService.remove(+id);
  }
}
