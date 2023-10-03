import { Request, Response, response } from "express";
import { ProductService } from "../services/ProductService";
import { Product } from "../entities/Product";

export class ProductController {
    productService: ProductService

    constructor(
        productService = new ProductService()
    ){
        this.productService = productService
    }

    getAllProducts = async (request: Request, response: Response) => {
        const products = await this.productService.getAllProducts()
        return response.status(200).json(products)
    }

    createProduct = (request: Request, response: Response) => {
        const product = request.body
        if(!product.name || !product.code || !product.price) {
            return response.status(400).json({ message: 'Bad Request - Campos de Nome/Codigo/Preço obrigatórios' })
        }

        this.productService.createProduct(
            product.name,
            product.code,
            product.price,
            product.sales,
            product.stock,
            product.favorite        
            )
        
            return response.status(200).json({ message: 'Produto criado' })
    }
}