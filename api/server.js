var express = require('express');
const ServicioAdministrador = require('./ServicioAdministrador');
require('dotenv').config();

var app = express();

app.use(express.json());

const router = express.Router();

//Crear administrador
router.route('/').post(ServicioAdministrador.insert);
// Obtener todos los administradores
router.route('/').get(ServicioAdministrador.getAll);
// Obtener un administrador
router.route('/:userId').get(ServicioAdministrador.get);
// Borrar un administrador
router.route('/:userId').delete(ServicioAdministrador.delete);
// Actualizar un adminiostrador
router.route('/:userId').put(ServicioAdministrador.update);

//Ruta especifica
app.use('/api/administrador', router);

//Levantar el servidor
app.listen(7000, ()=>{
    console.log('Servidor corriendo en el puerto ' + 7000)
})