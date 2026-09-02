import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: 'category_specialization'})
export class CategorySpecialization {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('uuid', {nullable: false})
    categoryId: string;
    @Column('uuid', {nullable: false})
    specializationId: string;

    @Column({ type: 'int', nullable: false })
    weight: number;

    //fks

}
