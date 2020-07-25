import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base.model';

@Entity()
export class Inventory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    itemName: string;

    @Column({ type: "text", nullable: false })
    itemDescription: string;

    @Column({ type: "text", nullable: false })
    itemType: string;

    @Column({ type: "int", default: -1, nullable: false })
    currency: number;

    @Column({ type: "int", default: -1, nullable: false })
    itemPrice: number;

    @Column({ type: "double", default: -1, nullable: false })
    discount: number;
}