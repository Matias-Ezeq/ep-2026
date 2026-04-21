const express = require('express')
const db = require('./models/index.js')
const { Producto } = require('./models')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/productos', async (req,res) => {
    try {
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
    
})

app.post('/productos', async (req,res) => {
    try {
        const { nombre, precio, stock} = req.body
        if (!nombre || precio == null || stock == null) {
            return res.status(400).json({message: "Faltan campos obligatorios."})
        }
        const producto = await Producto.create({
            nombre,
            precio,
            stock
        })
        res.status(201).json(producto)
    }
    catch (error) {
        res.status(500).json({message: "Error al crear el producto"})
    }
})

app.listen(PORT, async () => {
    await db.sequelize.sync()
    console.log("Aplicación iniciada, escuchando en puerto " + PORT)
})
