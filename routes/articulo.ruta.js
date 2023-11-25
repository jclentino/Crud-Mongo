const express = require('express')

const router = express.Router()
const articuloControlador = require('../controllers/articulo.controlador')

router.get('/articulos', async (req, res)=> {
    try {
        const todosLosArticulos = await articuloControlador.obtenerTodos()
        return res.send(todosLosArticulos)
    } catch(error){
        return res.send({
            error: trrue
        })
    }
})

router.get('/articulos/:id', async (req, res)=> {
    try {
        const articulo = await articuloControlador.obtenerPorId(req.params.id)
        return res.send(articulo)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.post('/articulos/crear', async (req, res)=> {
    try {
        const articulo = await articuloControlador.añadir(req.body)
        return res.send(articulo)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.patch('/articulos/editar/:id', async (req, res)=> {
    try {
        const articulo = await articuloControlador.editar(req.params.id, req.body)
        return res.send(articulo)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.delete('/articulos/eliminar/:id', async (req, res)=> {
    try {
        const eliminado = await articuloControlador.eliminar(req.params.id)
        return res.send(eliminado)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

module.exports = router