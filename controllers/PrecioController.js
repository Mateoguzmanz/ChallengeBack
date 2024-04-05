const Producto = require('../models/Product');

class PrecioController {
    async getPrecioEspecial(req, res) {
        try {
            const { user_id, nombre_marca } = req.params;
            const productos = await Producto.find({
                'marcas_especiales': { 
                    $elemMatch: { 
                        'user_id': user_id, 
                        'nombre': nombre_marca 
                    } 
                }
            });

            if (!productos || productos.length === 0) {
                return res.status(404).json({ error: 'No se encontraron productos de marcas especiales para el usuario y la marca especificados.' });
            }

            res.json(productos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioController();
