const express = require('express');
const app = express();
require('dotenv').config();
const adoptanteR = require('./routes/adoptanteRoutes')
const perroR = require('./routes/perroRoutes')
const PORT = process.env.PORT

app.use(express.json());

app.use('/api', adoptanteR);
app.use('/api', perroR);

app.listen(PORT, () => {
    console.log("Servidor corriendo");
})