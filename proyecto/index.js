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

app.listen(port, () => {
    console.log('Aplicación web corriendo')
})

