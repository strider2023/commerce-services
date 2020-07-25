import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from './base.model';
import { Inventory } from './inventory.model';
import { Order } from './order.model';

@Entity()
export class OrderItems extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Inventory)
    @JoinColumn()
    inventory: Inventory;

    @OneToOne(type => Order)
    @JoinColumn()
    order: Order;

    @Column({ type: "int", nullable: false })
    quantity: number;

    @Column({ type: "int", default: -1, nullable: false })
    amount: number;

    @Column({ type: "int", default: -1, nullable: false })
    totalAmount: number;

    @Column({ type: "double", default: -1, nullable: false })
    discount: number;
}