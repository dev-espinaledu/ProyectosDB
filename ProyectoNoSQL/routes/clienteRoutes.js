const express = require('express');
const router = express.Router();
const clienteC = require('../controllers/clienteController')

router.post('/clientes', clienteC.crearCliente);
router.get('/clientes', clienteC.verClientes);
router.put('/clientes/:id', clienteC.actualizarCliente);
router.delete('/clientes/:id', clienteC.eliminarCliente);

module.exports = router;