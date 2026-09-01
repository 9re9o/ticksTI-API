import { Injectable } from '@nestjs/common';
import { CreateTypeAssetDto } from './dto/create-type-asset.dto';
import { UpdateTypeAssetDto } from './dto/update-type-asset.dto';

@Injectable()
export class TypeequipmentService {
  create(createTypeAssetDto: CreateTypeAssetDto) {
    return 'This action adds a new typeAsset';
  }

  findAll() {
    return `This action returns all typeequipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeAsset`;
  }

  update(id: number, updateTypeAssetDto: UpdateTypeAssetDto) {
    return `This action updates a #${id} typeAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeAsset`;
  }
}
