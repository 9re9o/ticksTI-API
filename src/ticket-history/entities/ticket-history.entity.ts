import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({ name: 'ticket_history' })
export class TicketHistory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    userId: string;
    @Column('uuid')
    ticketId: string;
    @Column('uuid')
    actionId: string;

    @Column({type: 'text', nullable: true})
    oldValue: string;
    @Column({type: 'text', nullable: true})
    newValue: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' , nullable: false })
    createdAt: Date;
}
