import express, { Request, Response } from "express";
import { ProductRepository } from "./repositories/ProductRepository";
import { ProductController } from "./controllers/ProductController";

const server = express();
server.use(express.json());

const productController = new ProductController()

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'A-Market API'})
})

server.get('/products', productController.getAllProducts);

server.post('/products', productController.createProduct);


server.listen(5000, () => console.log('Servidor iniciado'));