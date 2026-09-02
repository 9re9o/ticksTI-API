import { PartialType } from '@nestjs/mapped-types';
import { CreateequipmentTypeDto } from './create-equipment-type-asset.dto';

export class UpdateequipmentTypeDto extends PartialType(CreateequipmentTypeDto) {}
