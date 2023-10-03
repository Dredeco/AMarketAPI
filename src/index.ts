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

server.post('/products', productController.createProduct)


server.listen(5000, () => console.log('Servidor iniciado'))


AppDataSource.initialize().then(async () => {
    console.log("Data Source inicializado")
    }).catch((error) => {
        console.log(error)}
)

