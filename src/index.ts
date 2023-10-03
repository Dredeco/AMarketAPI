import { AppDataSource } from "./data-source"
import { Product } from './entities/Product'

AppDataSource.initialize().then(async () => {
    console.log("Data Source inicializado")
    }).catch((error) => {
        console.log(error)}
)
