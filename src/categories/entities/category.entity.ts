import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'category'})
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text',length: 150, nullable: false, unique: true })
    name: string;

}
