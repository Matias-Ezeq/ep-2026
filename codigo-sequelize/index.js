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

app.get('/productos/:id', async (req,res) => {
    try {
        const { id }  = req.params
        const producto = await Producto.findByPk(id, {
            attributes: ["nombre","precio","stock"]
        })
        res.status(200).json(producto)
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

app.put('/productos/:idProducto', async (req,res) => {
    try {
        const { idProducto } = req.params
        const { nombre, precio, stock} = req.body
        const producto = await Producto.update({
            nombre,
            precio,
            stock
        },
        {where: {id: idProducto}}
        )
        res.status(201).json({message: "el producto fue actualizado con exito."})
    }
    catch (error) {
        res.status(500).json({message: "Error al actualizar el producto"})
    }
})


app.listen(PORT, async () => {
    await db.sequelize.sync()
    console.log("Aplicación iniciada, escuchando en puerto " + PORT)
})
