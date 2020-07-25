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
        const iventsRepository = new InventoryRepository();
        iventsRepository.getInventories(req.query).then(resp => {
            res.send(resp);
        });
    };

    getInventory(req: Request, res: Response) {
        const iventsRepository = new InventoryRepository();
        iventsRepository.getInventoryById(Number(req.params.eventId)).then(resp => {
            res.send(resp);
        });
    };

    createInventory(req: Request, res: Response) {
        const inventory = new Inventory();
        const iventsRepository = new InventoryRepository();
        iventsRepository.createInventory(inventory).then((resp: any) => {
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