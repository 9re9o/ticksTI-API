import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeAssetDto } from './create-type-asset.dto';

export class UpdateTypeAssetDto extends PartialType(CreateTypeAssetDto) {}
