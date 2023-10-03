import { EntityManager } from "typeorm";
import { Product } from "../entities/Product";

export class ProductRepository {
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ){
        this.manager = manager
    }

    getAllProducts = async () => {
        return this.manager.find(Product)
    }

    createProduct = async (product: Product) => {
        return this.manager.save(product)
    }
}