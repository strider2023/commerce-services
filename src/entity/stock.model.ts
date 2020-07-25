import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from './base.model';
import { Inventory } from './inventory.model';

@Entity()
export class Stock extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Inventory)
    @JoinColumn()
    inventory: Inventory;

    @Column({ type: "int", nullable: false })
    itemCount: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    addedOn: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    expiresOn: string;

    @Column({ type: "int", default: -1, nullable: false })
    currency: number;

    @Column({ type: "int", default: -1, nullable: false })
    itemPrice: number;

    @Column({ type: "double", default: -1, nullable: false })
    discount: number;
}