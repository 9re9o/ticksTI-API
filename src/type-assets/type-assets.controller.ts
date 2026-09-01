import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeequipmentService } from './type-equipment.service';
import { CreateTypeAssetDto } from './dto/create-type-asset.dto';
import { UpdateTypeAssetDto } from './dto/update-type-asset.dto';

@Controller('type-equipment')
export class TypeequipmentController {
  constructor(private readonly typeequipmentService: TypeequipmentService) {}

  @Post()
  create(@Body() createTypeAssetDto: CreateTypeAssetDto) {
    return this.typeequipmentService.create(createTypeAssetDto);
  }

  @Get()
  findAll() {
    return this.typeequipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeequipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeAssetDto: UpdateTypeAssetDto) {
    return this.typeequipmentService.update(+id, updateTypeAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeequipmentService.remove(+id);
  }
}
