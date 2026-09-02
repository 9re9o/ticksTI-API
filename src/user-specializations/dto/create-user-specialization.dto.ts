import{IsInt, Max, Min, IsUUID} from 'class-validator';

export class CreateUserSpecializationDto {

    @IsUUID() //VALIDA si es un uuid
    userId: string;
    @IsUUID()
    specializationId: number; // relacion fk

    @IsInt()
    @Min(1)
    @Max(5)
    level: number; 
    /**
        1 → Básico
        2 → Básico/Intermedio
        3 → Intermedio
        4 → Avanzado
        5 → Experto
     */
}
