const {Perro} = require('../models')

exports.crearPerro = async (req, res) => {
    const {nombre, raza, edad, tamano, adoptado, adoptanteId} = req.body;
    try {
        if(adoptado && !adoptanteId) {
            return res.json({message: "Debe proporcionar un adoptante si el perro está adoptado"});
        }
        const perro = await Perro.create({
            nombre,
            raza,
            edad,
            tamano,
            adoptado,
            adoptanteId: adoptado ? adoptanteId : null // Se escribe adoptanteId si lo hay
        });
        res.json(perro);
    } catch (error) {
        res.json({message: "Error"});
    }
};
exports.verPerros = async (req, res) => {
    try {
        const resultado = await Perro.findAll();
        res.json(resultado)
    } catch (e) {
        res.json({message: "error"})
    }
}
exports.actualizarPerro = async (req, res) => {
    const {id} = req.params;
    const {nombre, raza, edad, tamano, adoptado, adoptanteId} = req.body;
    try {
        const perro = await Perro.findByPk(id);
        if (!perro) {
            return res.json({message: "Perro no encontrado"});
        }
        perro.nombre = nombre;
        perro.raza = raza;
        perro.edad = edad;
        perro.tamano = tamano;
        perro.adoptado = adoptado;
        perro.adoptanteId = adoptado ? adoptanteId : null;
        await perro.save();
        res.json({message: "Perro actualizado correctamente"});
    } catch (error) {
        res.json({message: "Error"});
    }
};
exports.eliminarPerro = async (req, res) => {
    const {id} = req.params;
    try {
        const perro = await Perro.findByPk(id);
        if (!perro) {
            return res.json({message: "Perro no encontrado"});
        }
        await Perro.destroy({where: {id}});
        res.json({message: "Perro eliminado correctamente"});
    } catch (error) {
        res.json({message: "Error"});
    }
};