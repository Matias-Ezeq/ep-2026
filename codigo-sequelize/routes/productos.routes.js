const { Router } = require('express')

const router = Router()

const productosController = require('../controllers/productos.controllers.js')

router.get('/', productosController.obtenerProductos)

router.get('/:id', async (req,res) => {
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

router.post('/', productosController.crearProducto)

router.put('/:idProducto', productosController.actualizarProducto)

modules.exports = router