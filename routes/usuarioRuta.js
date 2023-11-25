const express = require('express')

const router = express.Router()
const usuarioControlador = require('../controllers/usuario.controlador')

router.get('/usuarios', async (req, res)=> {
    try {
        const todosLosUsuarios = await usuarioControlador.obtenerTodos()
        return res.send(todosLosUsuarios)
    } catch(error){
        return res.send({
            error: trrue
        })
    }
})

router.get('/usuarios/:id', async (req, res)=> {
    try {
        const usuario = await usuarioControlador.obtenerPorId(req.params.id)
        return res.send(usuario)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.post('/usuarios/crear', async (req, res)=> {
    try {
        const usuario = await usuarioControlador.añadir(req.body)
        return res.send(usuario)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.patch('/usuarios/editar/:id', async (req, res)=> {
    try {
        const usuario = await usuarioControlador.editar(req.params.id, req.body)
        return res.send(usuario)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

router.delete('/usuarios/eliminar/:id', async (req, res)=> {
    try {
        const eliminado = await usuarioControlador.eliminar(req.params.id)
        return res.send(eliminado)
    } catch(error){
        return res.send({
            error: true
        })
    }
})

module.exports = router