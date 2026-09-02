import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'action' })
export class Action {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text',length: 100, nullable: false, unique: true })
    name: string;
}
