import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategorySpecializationsService } from './category-specializations.service';
import { CreateCategorySpecializationDto } from './dto/create-category-specialization.dto';
import { UpdateCategorySpecializationDto } from './dto/update-category-specialization.dto';

@Controller('category-specializations')
export class CategorySpecializationsController {
  constructor(private readonly categorySpecializationsService: CategorySpecializationsService) {}

  @Post()
  create(@Body() createCategorySpecializationDto: CreateCategorySpecializationDto) {
    return this.categorySpecializationsService.create(createCategorySpecializationDto);
  }

  @Get()
  findAll() {
    return this.categorySpecializationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categorySpecializationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategorySpecializationDto: UpdateCategorySpecializationDto) {
    return this.categorySpecializationsService.update(+id, updateCategorySpecializationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categorySpecializationsService.remove(+id);
  }
}
