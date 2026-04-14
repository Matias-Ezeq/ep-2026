const express = require('express')
const app = express()
const port = 3000

const productos = require('./data/productos.json')

app.get('/usuarios', (req,res) => {
    const usuarios = [{nombre:'Juan',edad:20},
                       {nombre:'Paco',edad:20},
                       {nombre:'Pedro',edad:20}
                    ]
    res.json(usuarios)
})

app.get('/productos', (req,res) => {
    res.json(productos)
})

app.post('/productos', (req, res) => {
    const {nombre, precio, stock} = req.body
    const id = productos.length + 1

    if(!nombre || precio== null || stock == null) {
        return res.status(400).json({message: "Los campos nombre, precio, y stock son obligatorios"})
    }
    const nuevoProducto = {
        id,
        nombre,
        precio,
        stock
    }
    productos.push(nuevoProducto)
    res.status(200).json({message: "Producto creado con éxito"})
})

app.put('/productos/:id', (req,res) => {
    const {nombre, precio, stock} = req.body
    const { id } = req.params
    const indice = productos.findIndex( p => p.id == id)
    if(!nombre || precio== null || stock == null) {
        return res.status(400).json({message: "Los campos nombre, precio, y stock son obligatorios"})
    }
    productos[indice] = nuevoProducto
    res.status(200).json({message: "Producto actualizado con exito"})
})



app.listen(port, () => {
    console.log('Aplicación web corriendo')
})


