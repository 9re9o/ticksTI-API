import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSpecializationsService } from './user-specializations.service';
import { CreateUserSpecializationDto } from './dto/create-user-specialization.dto';
import { UpdateUserSpecializationDto } from './dto/update-user-specialization.dto';

@Controller('user-specializations')
export class UserSpecializationsController {
  constructor(private readonly userSpecializationsService: UserSpecializationsService) {}

  @Post()
  create(@Body() createUserSpecializationDto: CreateUserSpecializationDto) {
    return this.userSpecializationsService.create(createUserSpecializationDto);
  }

  @Get()
  findAll() {
    return this.userSpecializationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSpecializationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSpecializationDto: UpdateUserSpecializationDto) {
    return this.userSpecializationsService.update(+id, updateUserSpecializationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSpecializationsService.remove(+id);
  }
}
