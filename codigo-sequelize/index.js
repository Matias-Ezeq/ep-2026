const express = require('express')
const db = require('./models/index.js')
const routerProducto = require('./routes/productos.routes.js')
const routerCategorias = require('./routes/categorias.routes.js')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/productos', routerProducto)
app.use('/categorias',routerCategorias)


app.listen(PORT, async () => {
    await db.sequelize.sync()
    console.log("Aplicación iniciada, escuchando en puerto " + PORT)
})
