import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { equipmentService } from './equipment.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('equipment')
export class equipmentController {
  constructor(private readonly equipmentService: equipmentService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.equipmentService.create(createAssetDto);
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
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.equipmentService.update(+id, updateAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
