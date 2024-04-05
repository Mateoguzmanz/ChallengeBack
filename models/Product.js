const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    marca: String,
    precio_base: Number,
    stock: Number, 
    marcas_especiales: [{
        nombre: String,
        valor: Number,
        user_id: String
    }]
});

module.exports = mongoose.model('Producto', productoSchema);