
import {Column, Entity ,OneToMany,PrimaryGeneratedColumn} from 'typeorm';
import { Users} from '../../users/entities/user.entity';

@Entity({name : 'Department'})
export class Departments{

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    name!: string

    @OneToMany(() => Users, (user) => user.department,)
    users!: Users[];

}



