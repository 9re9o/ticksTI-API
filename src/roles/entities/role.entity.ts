import {Column, Entity ,OneToMany,PrimaryGeneratedColumn} from 'typeorm';
import { Users } from '../../users/entities/user.entity';

@Entity({name : 'Role'})
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id!: string
    
    @Column()
    name!: string

    @OneToMany(
        () => Users,
        (user: Users) => user.role
    ) users!: Users[];
}
