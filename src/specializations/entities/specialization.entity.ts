import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'specialization' })
export class Specialization {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 150, unique: true })
    name!: string;
}
