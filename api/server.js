var express = require('express');
const { insertarAdministrador } = require('./ServicioAdministrador');
require('dotenv').config();

var app = express();


app.use(express.json());

const router = express.Router();

//Recibir el usuario
router.route('/').post(insertarAdministrador);

//Ruta especifica
app.use('/api/administrador', router);

//Levantar el servidor
app.listen(7000, ()=>{
    console.log('Servidor corriendo en el puerto ' + 7000)
})