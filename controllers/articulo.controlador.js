const articuloModelo = require('../models/articulo.modelo')

class ArticuloControlador {
    async obtenerTodos(){
        try {
            return await articuloModelo.find()
        } catch (error){
            throw new Error(error)
        }
    }
    
    async obtenerPorId(id){
        try {
            const articulo = await articuloModelo.findById(id)
            if (!articulo){
                throw new Error('No existe ningun articulo con ese id')
            }
            return articulo
        } catch (error){
            throw new Error(error)
        }
    }
    
    async añadir(nuevoArticulo){
        try {
            const articuloCreado = new articuloModelo(nuevoArticulo)
            const articulo = await articuloCreado.save()
            return articulo
        } catch (error){
            throw new Error(error)
        }
    }
    
    async editar(id, nuevoArticulo){
        try {
            const articuloActualizado = await articuloModelo.findByIdAndUpdate(
                id,
                { $set: nuevoArticulo },
                { new: true }
            )

            if (articuloActualizado === null) {
                throw new Error('No existe ningun articulo con ese id')
            }

            return articuloActualizado
        } catch (error){
            throw new Error(error)
        }
    }
    
    async eliminar(id){
        try {            
            const eliminado = await articuloModelo.findByIdAndDelete(id);
            if (!eliminado) {
                throw new Error('No existe ningun articulo con ese id')
            }

            return { msg: 'Eliminado exitosamente' }
        } catch (error){
            throw new Error(error)
        }
    }
}

const articuloControlador = new ArticuloControlador()

module.exports = articuloControlador