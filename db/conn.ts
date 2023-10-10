const mongoose = require('mongoose')

const main = async () => {
    try {
        await mongoose.connect('mongodb+srv://andrefersouza:3fmp0dLmsDrXqBYJ@cluster0.olct8hi.mongodb.net/?retryWrites=true&w=majority')
        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;