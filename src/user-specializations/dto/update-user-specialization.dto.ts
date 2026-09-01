import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSpecializationDto } from './create-user-specialization.dto';

export class UpdateUserSpecializationDto extends PartialType(CreateUserSpecializationDto) {}
