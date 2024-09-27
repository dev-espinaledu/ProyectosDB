const express = require("express");
const app = express();
const autoR = require('./routes/autoRoutes')
const clienteR = require('./routes/clienteRoutes')
const alquileresR = require('./routes/alquileresRoutes')
require('dotenv').config();
const conectDB = require('./config/db')
app.use(express.json())

app.use('/api', autoR);
app.use('/api', clienteR);
app.use('/api', alquileresR);

conectDB().then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("No se pudo iniciar en el servidor debido a un error de conexión con la base de dattos", error);
});