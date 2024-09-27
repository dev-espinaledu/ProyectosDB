const express = require('express')
const router = express.Router();
const adoptanteC = require('../controllers/adoptanteController')

router.post('/adoptantes', adoptanteC.crearAdoptante)
router.get('/adoptantes', adoptanteC.verAdoptantes)
router.put('/adoptantes/:id', adoptanteC.actualizarAdoptante)
router.delete('/adoptantes/:id', adoptanteC.eliminarAdoptante)

module.exports = router