import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipmentTypes' })
export class EquipmentType {
    @PrimaryGeneratedColumn( 'uuid')
    id: string;

    @Column({ unique: true, nullable: false , length: 100})
    name: string;
}
