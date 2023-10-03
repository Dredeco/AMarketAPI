import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from 'crypto'

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    code: string

    @Column({ nullable: false })
    price: number

    @Column({ nullable: false })
    sales: number

    @Column({ nullable: false })
    stock: number

    @Column({ nullable: false })
    favorite: boolean

    constructor(
        name: string,
        code: string,
        price: number,
        sales: number,
        stock: number,
        favorite: boolean
    ){
        this.product_id = randomUUID(),
        this.name = name,
        this.code = code,
        this.price = price,
        this.sales= sales,
        this.stock = stock,
        this.favorite = favorite
    }
}