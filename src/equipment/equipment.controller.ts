import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { equipmentService } from './equipment.service';
import { CreateEquipmentDto} from './dto/create-equipment.dto';
import { UpdateEquipmentDto} from './dto/update-equipment.dto';

@Controller('equipment')
export class equipmentController {
  constructor(private readonly equipmentService: equipmentService) {}

  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(+id, updateEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
