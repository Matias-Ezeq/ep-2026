const { Producto } = require('../models')

const obtenerProductos = async (req,res) => {
    try {
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

const crearProducto = async (req,res) => {
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
}

const actualizarProducto = async (res,req) => {
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
}


module.exports = {
    obtenerProductos,crearProducto,actualizarProducto
}