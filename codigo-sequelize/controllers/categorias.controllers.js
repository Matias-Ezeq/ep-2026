const { Categoria } = require('../models')

const obtenerCategorias = async (req,res) => {
    try {
        const categorias = await Categoria.findAll()
        res.status(200).json(categorias)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

const crearCategoria = async (req,res) => {
    try {
        const { nombre } = req.body
        if (!nombre) {
            return res.status(400).json({message: "El nombre es obligatorio."})
        }
        const categoria = await Categoria.create({
            nombre
        })
        res.status(201).json(categoria)
    }
    catch (error) {
        res.status(500).json({message: "Error al crear la categoria"})
    }
}

module.exports = {crearCategoria,obtenerCategorias}