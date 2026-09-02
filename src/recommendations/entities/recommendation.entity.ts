import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'recommendation'})
export class Recommendation {

    @PrimaryGeneratedColumn('uuid' )
    id: string;

    @Column('uuid' , {nullable: false})
    ticketId: string;
    @Column('uuid' , {nullable: false})
    userId: string;

    @Column({ type: 'float', nullable: false })
    score: number;

    @Column({ type: 'int', nullable: false })
    position: number;
   
    @Column({ type: 'boolean', nullable: false, default: false })
    selected: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' , nullable: false })
    createdAt: Date;

    //fks

}
