import { AppDataSource } from "./data-source"
import express, { Request, Response } from "express";
import { ProductController } from "./controllers/ProductController";

const server = express();
server.use(express.json());

const productController = new ProductController()

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'A-Market API'})
})

server.get('/products', productController.getAllProducts)

server.get('/products/:product_id', productController.getProductByID)

server.post('/products', productController.createProduct)

server.listen(5000, () => console.log('Servidor iniciado'))

