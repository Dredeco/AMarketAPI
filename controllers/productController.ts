import { Request, Response } from "express";
const {Product: productModel} = require('../models/Products')

interface IProduct {
    name: string,
    code: string,
    price: number,
    sales: number,
    stock: number,
    favorite: boolean
}

export const productController = {
    createProduct: async(req: Request, res: Response) => {
        try {
            const product: IProduct = {
                name: req.body.name,
                code: req.body.code,
                price: req.body.price,
                sales: req.body.sales,
                stock: req.body.stock,
                favorite: false
            }

           if(!product.name || !product.code || !product.price || !product.sales || !product.stock){
                res.status(400).json({message: "All fields are required!"})
                return;
            }

            const response = await productModel.create(product)
            res.status(201).json({message: "New product created:", response})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req: Request, res: Response) => {
        try {
            const products = await productModel.find()
            res.status(200).json({products})
        } catch (error) {
            console.log(error)
        }
    },

    get: async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const product = await productModel.findById(id)

            if(!product){
                res.status(404).json({message: "Product not found"})
                return
            }

            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    },

    update:async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const product = await productModel.findById(id)
            const favorite = product.favorite

            await productModel.findByIdAndUpdate(id, {favorite: !favorite})
        } catch (error) {
            console.log(`${error}`)
        }
    }
}