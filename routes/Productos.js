const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/ProductoController'); 

router.get('/', ProductoController.getProductosEnStock);

module.exports = router;