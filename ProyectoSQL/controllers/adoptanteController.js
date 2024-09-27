const { json } = require('sequelize')
const {Adoptante} = require('../models');

exports.crearAdoptante = async (req, res) => {
    const {nombre, correo, direccion} = req.body;
    try {
        const ad = await Adoptante.create({nombre, correo, direccion});
        res.json(ad);
    } catch (e) {
        res.json({message: "error"});
    }
};
exports.verAdoptantes = async (req, res) => {
    try {
        const resultado = await Adoptante.findAll();
        res.json(resultado);
    } catch (e) {
        res.json({message: "error"});
    }
};
exports.actualizarAdoptante = async (req, res) => {
    const {id} = req.params;
    const {nombre, correo, direccion} = req.body;
    try {
        let resAdoptante = await Adoptante.findByPk(id);
        if(resAdoptante) {
            resAdoptante.nombre = nombre;
            resAdoptante.correo = correo;
            resAdoptante.direccion = direccion;
            await resAdoptante.save();
            res.json({message: "El adoptante ha sido actualizado"});
        } else {
            res.json({message: "Adoptante no encontrado"});
        }
    } catch (e) {
        res.json({message: "error"});
    }
};
exports.eliminarAdoptante = async (req, res) => {
    const {id} = req.params;
    try {
        let resAdoptante = await Adoptante.findByPk(id);
        if(resAdoptante) {
            await Adoptante.destroy({where: {id: id}});
            res.json({message: "El adoptante ha sido eliminado"});
        } else {
            res.json({message:"Adoptante no encontrado"});
        }
    } catch (e) {
        res.json({message: "error"});
    }
};