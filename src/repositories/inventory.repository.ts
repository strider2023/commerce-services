import { getRepository, Like } from "typeorm";
import { Inventory } from "../entity/inventory.model";

export class InventoryRepository {

    inventoryRepository: any;

    constructor() {
        this.inventoryRepository = getRepository(Event);
    }

    async createInventory(inventory: Inventory) {
        const resp = await this.inventoryRepository.save(inventory);
        console.log(`Event, created successfully.`);
        return resp;
    }

    async getInventoryById(inventoryId: number) {
        const event = await this.inventoryRepository.findOne({ id: inventoryId });
        if (event) {
            console.log("getEventById", `Event Found: ${event.eventName}`);
        } else {
            console.log("getEventById", `Event not found for the id ${inventoryId}`);
        }
        return event;
    }

    async getInventories(query: any) {
        const count = query.count || 10;
        const offset = query.offset || 0;
        const filter = query.keyword || '';
        const orderBy = query.orderBy || 'DESC';
        const events = await this.inventoryRepository.findAndCount(
            {
                where: { eventName: Like('%' + filter + '%') },
                order: { eventName: orderBy },
                take: count,
                skip: offset
            }
        );
        if (events) {
            console.log("getEvents", `Events count: ${events.length}.`);
        } else {
            console.log("getEvents", `No events found.`);
        }
        return events;
    }
}