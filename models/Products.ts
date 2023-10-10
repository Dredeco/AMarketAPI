const mongoose = require('mongoose')
let { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    favorite: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true})

const Product = mongoose.model("Product", productSchema);

module.exports = {Product}