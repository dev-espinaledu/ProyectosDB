const express = require('express');
const router = express.Router();
const autoC = require('../controllers/autoController')

router.post('/autos', autoC.crearAuto);
router.get('/autos', autoC.verAutos);
router.put('/autos/:id', autoC.actualizarAuto);
router.delete('/autos/:id', autoC.eliminarAuto);

module.exports = router;