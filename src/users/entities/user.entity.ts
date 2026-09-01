import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import { Departments } from '../../departments/entities/departments.entity';
import { Role } from '../../roles/entities/role.entity';
import { Ticket } from '../../tickets/entities/ticket.entity';

@Entity({name : 'User'})
export class Users  {
    
    
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({length: 255})
    name!:string;

    @Column({unique: true, length: 255})
    email!: string

    //FK
    @Column('uuid')
    departmentId!:string

    //relacion objeto
    @ManyToOne(()=> Departments, (department) => department.users,{
        nullable:false, //un usuario obligatoriamente pertenece a un departamento.
    },)
    @JoinColumn({name: 'departmentId'})
    department!: Departments;

    // roleId 
    @Column('uuid')
    roleId!: string;


    @ManyToOne(
        () => Role,
        (role)=> role.users,
        {
            nullable:false
        }
    )
    @JoinColumn({
        name:'roleId'
    })
    role!: Role;


    @OneToMany(
        () => Ticket,
        (ticket) => ticket.createdBy
    )
    createdTickets!: Ticket[];

    @OneToMany(
        ()=> Ticket,
        (ticket) => ticket.assignedTo
    )
    assignedTickets!: Ticket[];
    

}
