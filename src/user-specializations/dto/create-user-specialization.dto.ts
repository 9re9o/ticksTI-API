import{IsInt, Max, Min, IsUUID} from 'class-validator';

export class CreateUserSpecializationDto {

    @IsUUID() //VALIDA si es un uuid
    userId: string;
    @IsUUID()
    specializationId: number; // relacion fk

    @IsInt()
    @Min(1)
    @Max(5)
    level: number; // 1 - 5 | 5 => mas fuerte
}
