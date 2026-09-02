import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'equipment'})
export class Asset {

    @PrimaryGeneratedColumn('uuid' )
    id: string;

    @Column({ type: 'text',length: 100, nullable: false})
    name: string;

    @Column({ type: 'text',length: 100, nullable: false})
    brand: string;

    @Column({ type: 'text',length: 150, nullable: false, unique: true })
    serialNumber: string;

    // active, inactive, repair, retired ...
    @Column({ type: 'text',length: 30, nullable: false })
    status: string;

    @Column('uuid' , {nullable: false})
    assignedUserId: string;

    @Column('uuid' , {nullable: false})
    typeId: string;

    //fks
}
