const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a la Base de Datos');
    } catch (e) {
        console.log('Error al conectar a la Base de Datos', e);
    }
};
module.exports = conectDB;