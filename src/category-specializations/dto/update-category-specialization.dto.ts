import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorySpecializationDto } from './create-category-specialization.dto';

export class UpdateCategorySpecializationDto extends PartialType(CreateCategorySpecializationDto) {}
