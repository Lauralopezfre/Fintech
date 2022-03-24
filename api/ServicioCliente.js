const mongoose = require('mongoose');
const control = require('../control/control');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt')

//Crear un cliente 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(req.body.contrasenia, salt );

    const cliente = await control.cliente.insertar(
        req.body.userId,
        req.body.nombre,
        password,
        req.body.fechaRegistro,
        req.body.email,
        req.body.rfc,
        req.body.direccion,
        req.body.identificacion,
        req.body.cantidadCuentas,
        req.body.tiposTarjetas,
        req.body.telefono
    )

    var token = await generarJWT(req.body.userId, req.body.nombre);
      
    res.status(201).json({
      status: 'success',
      data: {
        cliente: cliente
      },
      auth: true, 
      token: token
    });

  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//Obtener la lista de clientes 
exports.getAll = async (req, res) =>{
  try{
    // Interacción con el acceso a datos
    control.cliente.obtenerTodos().then(cliente => {
      res.send(cliente)
    })
  }catch(err){
    res.send(err);
  }
}

//Obtener cliente 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    control.cliente.obtener(req.params.userId).then(cliente => {
      res.send(cliente[0])
    })
  }catch(err){
    res.send(err);
  }
}

//Update cliente
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    control.cliente.actualizar(
        req.body.userId,
        req.body.nombre,
        req.body.contrasenia,
        req.body.fechaRegistro,
        req.body.email,
        req.body.rfc,
        req.body.direccion,
        req.body.identificacion,
        req.body.cantidadCuentas,
        req.body.tiposTarjetas,
        req.body.telefono)

    control.cliente.obtener(req.params.userId).then(cliente => {
      res.status(200).json({
      status: 'success',
      cliente: (cliente[0])
      }); 
    })
  } catch (error) {
      res.send(error);
  }
};

//Delete cliente 
exports.delete = async (req, res) =>{
  //Interacción con la base de datos
  control.cliente.eliminar(req.params.userId);

  try {
    res.status(204).json({
      status: 'success',
      cliente: null
    });
  } catch (error) {
      res.send(error);
  }   
}