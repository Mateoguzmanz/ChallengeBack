const mongoose = require('mongoose');

const precioEspecialSchema = new mongoose.Schema({
    userId: Number,
    marca: String,
    precio_especial: Number
}); 

module.exports = mongoose.model('PrecioEspecial', precioEspecialSchema);
