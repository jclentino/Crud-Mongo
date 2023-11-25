const usuarioModelo = require('../models/usuario.modelo')

class UsuarionControlador {
    async obtenerTodos(){
        try {
            return await usuarioModelo.find()
        } catch (error){
            throw new Error(error)
        }
    }
    
    async obtenerPorId(id){
        try {
            const usuario = await usuarioModelo.findOne({ cedula: parseInt(id) })
            if (!usuario){
                throw new Error('No existe ningun usuario con esa cedula')
            }
            return usuario
        } catch (error){
            throw new Error(error)
        }
    }
    
    async añadir(nuevoUsuario){
        try {
            const usuarioCreado = new usuarioModelo(nuevoUsuario)
            const usuario = await usuarioCreado.save()
            return usuario
        } catch (error){
            throw new Error(error)
        }
    }
    
    async editar(id, nuevoUsuario){
        try {
            const usuarioActualizado = await usuarioModelo.findOneAndUpdate(
                { cedula: parseInt(id) },
                { $set: nuevoUsuario },
                { new: true }
            )

            if (usuarioActualizado === null) {
                throw new Error('No existe ningun usuario con esa cedula')
            }

            return usuarioActualizado
        } catch (error){
            throw new Error(error)
        }
    }
    
    async eliminar(id){
        try {            
            const eliminado = await usuarioModelo.deleteOne({ cedula: parseInt(id) });
            if (!eliminado) {
                throw new Error('No existe ningun usuario con esa cedula')
            }

            return { msg: 'Eliminado exitosamente' }
        } catch (error){
            throw new Error(error)
        }
    }
}

const usuarioControlador = new UsuarionControlador()

module.exports = usuarioControlador