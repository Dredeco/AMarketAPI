import { DataSource } from 'typeorm'
import { Product } from '../entities/Product'

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    entities: [
        Product
    ],
    migrations: [
        "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source inicializado")
}).
catch((error) => {
    console.log(error)
})