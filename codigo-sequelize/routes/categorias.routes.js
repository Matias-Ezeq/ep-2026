const { Router } = require('express')

const router = Router()


const categoriasController = require('../controllers/categorias.controllers.js')

router.get('/',categoriasController.obtenerCategorias)

router.post('/',categoriasController.crearCategoria)

module.exports = router