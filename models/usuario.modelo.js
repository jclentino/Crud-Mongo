const { model, Schema } = require('mongoose') 

const userSchema = new Schema({
    cedula: { 
        type: Number, 
        unique: true, 
        required: true 
    },
    nombre: { 
        type: String, 
        required: true 
    },
    telefono: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    clave: { 
        type: String, 
        required: true 
    },
})

module.exports = model('Usuario', userSchema)