const { model, Schema } = require('mongoose')

const articleSchema = new Schema({
    usuario_id: {
        type: Number,
        ref: 'Usuario', 
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    precioventa: {
        type: Number,
        required: true
    },
    precioCompra: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    tienda: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
});

module.exports = model('Articulo', articleSchema)