const mongoose  = require('mongoose')
const config = require('../config')

const connectDB = async () => {
    try {
      const uri = config.DB_URI;
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexion establecida correctamente');
    } catch (error) {
      console.error('Error al establecer conexion:', error.message)
      process.exit(1);
    }
  }
  
module.exports = connectDB;