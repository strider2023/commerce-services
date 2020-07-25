import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from './base.model';

@Entity()
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    orderNumber: string;

    @Column({ type: "text", nullable: false })
    name: string;

    @Column({ type: "text", nullable: false })
    home: string;

    @Column({ type: "text", nullable: false })
    street: string;

    @Column({ type: "text", nullable: false })
    pin: string;

    @Column({ type: "text", nullable: false })
    state: string;

    @Column({ type: "text", nullable: false })
    country: string;

    @Column({ type: "text", nullable: false })
    phone: string;

    @Column({ type: "text", nullable: false })
    email: string;

    @Column({ type: "int", default: -1, nullable: false })
    billAmount: number;

    @Column({ type: "int", default: -1, nullable: false })
    totalAmount: number;

    @Column({ type: "double", default: -1, nullable: false })
    discount: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    orderDate: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: true })
    orderExpiry: string;
}