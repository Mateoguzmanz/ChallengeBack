const express = require('express'); 
const router = express.Router();
const PrecioController = require('../controllers/PrecioController'); 

router.get('/:user_id/:nombre_marca', PrecioController.getPrecioEspecial);

module.exports = router;