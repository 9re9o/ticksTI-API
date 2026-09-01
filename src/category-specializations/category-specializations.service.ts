import { Injectable } from '@nestjs/common';
import { CreateCategorySpecializationDto } from './dto/create-category-specialization.dto';
import { UpdateCategorySpecializationDto } from './dto/update-category-specialization.dto';

@Injectable()
export class CategorySpecializationsService {
  create(createCategorySpecializationDto: CreateCategorySpecializationDto) {
    return 'This action adds a new categorySpecialization';
  }

  findAll() {
    return `This action returns all categorySpecializations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categorySpecialization`;
  }

  update(id: number, updateCategorySpecializationDto: UpdateCategorySpecializationDto) {
    return `This action updates a #${id} categorySpecialization`;
  }

  remove(id: number) {
    return `This action removes a #${id} categorySpecialization`;
  }
}
