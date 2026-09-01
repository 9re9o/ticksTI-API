import { Injectable } from '@nestjs/common';
import { CreateUserSpecializationDto } from './dto/create-user-specialization.dto';
import { UpdateUserSpecializationDto } from './dto/update-user-specialization.dto';

@Injectable()
export class UserSpecializationsService {
  create(createUserSpecializationDto: CreateUserSpecializationDto) {
    return 'This action adds a new userSpecialization';
  }

  findAll() {
    return `This action returns all userSpecializations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSpecialization`;
  }

  update(id: number, updateUserSpecializationDto: UpdateUserSpecializationDto) {
    return `This action updates a #${id} userSpecialization`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSpecialization`;
  }
}
