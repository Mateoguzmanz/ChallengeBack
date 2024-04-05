const ProductoService = require('../services/ProductoService');

class ProductoController {
    async getProductosEnStock(req, res) {
        try {
            const productosEnStock  = await ProductoService.obtenerProductosEnStock();
            res.json(productosEnStock);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = new ProductoController();