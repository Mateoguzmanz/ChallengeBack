const Producto = require('../models/Product'); 

class ProductoService {
    async obtenerProductosEnStock() {
        try {
            return await Producto.find({stock: {$gt: 0}});
        } catch (error) {
            throw new Error('Error al obtener productos en Stock', error)
        }
    }
}



module.exports = new ProductoService();