const express = require('express')
const router = express.Router();
const perroC = require('../controllers/perroController')

router.post('/perros', perroC.crearPerro)
router.get('/perros', perroC.verPerros)
router.put('/perros/:id', perroC.actualizarPerro)
router.delete('/perros/:id', perroC.eliminarPerro)

module.exports = router