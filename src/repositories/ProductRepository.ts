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

    getProductById = async (product_id: string): Promise<Product | null> => {
        return this.manager.findOne(Product, {
            where: {
                product_id: product_id
            }
        })
    }

    createProduct = async (product: Product) => {
        return this.manager.save(product)
    }
}