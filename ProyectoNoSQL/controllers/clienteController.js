const {Cliente} = require('../models/alquilerModel');

const crearCliente = async (req, res) => {
    try {
        const {nombre, correo, licencia} = req.body;
        const cliente = new Cliente({nombre, correo, licencia});
        await cliente.save();
        res.json({message: "Cliente creado con éxito"});
    } catch (e) {
        res.json({message: "error"})
    }
}
const verClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (e) {
        res.json({message: "error"})
    }
}
const actualizarCliente = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, correo, licencia} = req.body;
        const cliente = await Cliente.findByIdAndUpdate(id, {nombre, correo, licencia}, {new: true})
        res.json(cliente);
    } catch (e) {
        res.json({message: "error"})
    }
}
const eliminarCliente = async (req, res) => {
    try {
        const {id} = req.params;
        let clienteEliminado = await Auto.findByIdAndDelete(id);
        if (!clienteEliminado) {
            res.json({message: "Cliente no encontrado"})
        } else {
            res.json({message: "Cliente eliminado"})
        }
    } catch (e) {
        res.json({message: "Error"})
    }
};
module.exports = {crearCliente, verClientes, actualizarCliente, eliminarCliente}