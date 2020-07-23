import { Request, Response } from "express";
import { Inventory } from "../entity/inventory.model";
import { InventoryRepository } from "../repositories/inventory.repository";

export class InventoryController {

    constructor(app: any) {
        app.get("/api/inventories", this.getInventories);
        app.post("/api/inventory", this.createInventory);
        app.get("/api/inventory/:inventoryId", this.getInventory);
        app.patch("/api/inventory/:inventoryId", this.updateInventory);
        app.delete("/api/inventory/:inventoryId", this.deleteInventory);
    }

    getInventories(req: Request, res: Response) {
        const eventsRepository = new InventoryRepository();
        eventsRepository.getInventories(req.query).then(resp => {
            res.send(resp);
        });
    };

    getInventory(req: Request, res: Response) {
        const eventsRepository = new InventoryRepository();
        eventsRepository.getInventoryById(Number(req.params.eventId)).then(resp => {
            res.send(resp);
        });
    };

    createInventory(req: Request, res: Response) {
        const event = new Inventory();
        event.eventName = req.body.eventName;
        event.eventDescription = req.body.eventDescription;
        event.maxAudience = req.body.maxAudience;
        event.eventStart = req.body.eventStart;
        event.eventEnd = req.body.eventEnd;
        event.eventType = req.body.eventType;
        event.eventLiveURL = req.body.eventLiveURL;
        const eventsRepository = new InventoryRepository();
        eventsRepository.createInventory(event).then((resp: any) => {
            res.send(resp.id);
        });
    };

    updateInventory(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteInventory(req: Request, res: Response) {
        res.send("Hello world!");
    };
}