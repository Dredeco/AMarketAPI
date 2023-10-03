import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
    private productRepository: ProductRepository;

    constructor(
        productRepository = new ProductRepository(AppDataSource.manager)
    ){
        this.productRepository = productRepository
    }

    getAllProducts = async () => {
        const products = this.productRepository.getAllProducts()
        return products
    }

    getProductByID = (product_id: string): Promise<Product | null> => {
        return this.productRepository.getProductById(product_id)
    }

    createProduct = async (
        name: string,
        code: string,
        price: number,
        sales: number,
        stock: number,
        favorite: boolean
        ) => {
            const product = new Product(name, code, price, sales, stock, favorite)
            return this.productRepository.createProduct(product)
    }
}