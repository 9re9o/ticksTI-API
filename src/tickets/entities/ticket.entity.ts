import {
Column,
Entity,
PrimaryGeneratedColumn,
ManyToOne,
JoinColumn
} from 'typeorm';

import { Users } from '../../users/entities/user.entity';


@Entity({name:'Ticket'})
export class Ticket {

    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column({length:255})
    title!: string;


    @Column({type:'text', nullable:true})
    description!: string;


    @Column({
        type:'timestamptz',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    createdAt!: Date;


    @Column({
        type:'timestamptz',
        nullable:true
    })
    closedAt!: Date | null;



    @Column('uuid')
    createdById!: string;


    @ManyToOne(
        ()=>Users,
        (user)=>user.createdTickets
    )
    @JoinColumn({
        name:'createdById'
    })
    createdBy!: Users;



    @Column('uuid', {
        nullable:true
    })
    assignedToId!: string | null;



    @ManyToOne(
        ()=>Users,
        (user)=>user.assignedTickets
    )
    @JoinColumn({
        name:'assignedToId'
    })
    assignedTo!: Users;



    @Column({
        length:20,
        default:'MEDIUM'
    })
    priority!: string;


    @Column({
        length:30,
        default:'OPEN'
    })
    status!: string;
}