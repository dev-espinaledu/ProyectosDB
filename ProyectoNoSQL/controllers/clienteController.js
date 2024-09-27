const Cliente = require('../models/');

const crearCliente = async (req, res) => {
    try {
        const {nombre, correo, licencia} = req.body;
        const cliente = new Auto({nombre, correo, licencia});
        await cliente.save();
        res.json(cliente);
    } catch (e) {
        res.json({message: "error"})
    }
}
module.exports = {crearCliente}