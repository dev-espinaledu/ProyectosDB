const {Auto} = require('../models/alquilerModel');

const crearAuto = async (req, res) => {
    try {
        const {marca, modelo, año, disponible} = req.body;
        const auto = new Auto({marca, modelo, año, disponible});
        await auto.save();
        res.json({message: 'Auto creado con éxito'});
    } catch (e) {
        res.json({message: "error"})
    }
}
const verAutos = async (req, res) => {
    try {
        const autos = await Auto.find();
        res.json(autos);
    } catch (e) {
        res.json({message: "Error"});
    }
};
const actualizarAuto = async (req, res) => {
    try {
        const {id} = req.params;
        const {marca, modelo, año, disponible} = req.body;
        const auto = await Auto.findByIdAndUpdate(id, {marca, modelo, año, disponible}, {new: true});
        res.json(auto);
    } catch (e) {
        res.json({message: "Error"});
    }
};
const eliminarAuto = async (req, res) => {
    try {
        const {id} = req.params;
        let autoEliminado = await Auto.findByIdAndDelete(id);
        if (!autoEliminado) {
            res.json({message: "Auto no encontrado"})
        } else {
            res.json({message: "Auto eliminado"})
        }
    } catch (e) {
        res.json({message: "Error"})
    }
};
module.exports = {crearAuto, verAutos, actualizarAuto, eliminarAuto};