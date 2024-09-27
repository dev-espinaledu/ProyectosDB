const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    licencia: {
        type: String,
        required: true
    }
});
const autoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true
    }
});
const alquilerSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    auto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    }
});
const Cliente = mongoose.model('Cliente', clienteSchema);
const Auto = mongoose.model('Auto', autoSchema);
const Alquiler = mongoose.model('Alquiler', alquilerSchema);

module.exports = {Cliente, Auto, Alquiler};