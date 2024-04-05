const PrecioEspecial = require('../models/PrecioEspecial'); 

class PrecioEspecialService {
    async obtenerPrecioEspecial(userId, marca) {
        try {
            const precioEspecial= await PrecioEspecial.findOne({userId, marca}); 
            return precioEspecial ? precioEspecial.precio_especial: null; 
        } catch (error) {
            throw new Error('Error al obtener el precio especial', error)
        }
    }
}

module.exports = new PrecioEspecialService();