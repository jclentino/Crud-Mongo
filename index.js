const express = require('express') 
const connection  = require("./database/connection")
const usuarioRuta = require('./routes/usuarioRuta')
const articuloRuta = require('./routes/articulo.ruta')

const app = express()
connection()

app.use(express.json())

app.get('/', (req, res)=> {
    res.json({
        msg: 'Iniciando app'
    })
})

app.use(usuarioRuta)
app.use(articuloRuta)

app.listen(9000, ()=> {
    console.log('Escuchando aplicacion en puerto 9000')
})