import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'user_specialization' })
export class UserSpecialization {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('uuid')
    userId: string;

    @Column('uuid')
    specializationId: string; ///relacion fk 

    @Column({nullable: false})
    level: number // 1 - 5  | 5=> mas fuerte 

}