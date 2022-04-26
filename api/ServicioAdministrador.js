const mongoose = require('mongoose');
const control = require('../control/control');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt')
const jwt = require('jsonwebtoken');
const MiddlewareError = require('../helpers/MiddlewareError');
const { validarEmail, validarPassword } = require('../controller/validaciones');

//Crear un administrador 
exports.insert =  async (req, res, next) =>{
  try {
    //Validación
    if(!validarPassword(req.body.contrasenia)){
      return next(new MiddlewareError('La dirección de email no es correcta', 400));
    }

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync( req.body.contrasenia, salt );

    const admin = await control.administrador.insertar(
        req.body.userId,
        req.body.nombre,
        password,
        req.body.fechaRegistro,
        req.body.email,
        req.body.nombreAdministrador,
        req.body.area,
        req.body.puesto,
        req.body.telefono
    )

    var token = await generarJWT(req.body.userId, req.body.nombre);

    res.header('Access-Control-Allow-Origin', '*');
    res.status(201).json({
      status: 'success',
      data: {
        administrador: admin
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

//Obtener la lista de administradores 
exports.getAll = async (req, res) =>{
  try{
    // Interacción con el acceso a datos
    const administradores = await control.administrador.obtenerTodos()

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'sucess',
      administradores: administradores
    });
  }catch(err){
    res.send(err);
  }
}

//Obtener administrador 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    const admin = await control.administrador.obtener(req.params.userId);

    if(!admin[0]){
      return next(new MiddlewareError('El administrador no fue encontrado', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      administrador: admin[0]
    });
  }catch(err){
    res.send(err);
  }
}

//Update Administrador
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    
    await control.administrador.actualizar(
      req.params.userId,
      req.body.nombre,
      req.body.contrasenia,
      req.body.fechaRegistro,
      req.body.email,
      req.body.nombreAdministrador,
      req.body.area,
      req.body.puesto,
      req.body.telefono)

    const admin = await control.administrador.obtener(req.params.userId)

    if(!admin[0]){
      return next(new MiddlewareError('El administrador no fue encontrado', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      administrador: (admin[0])
    }); 

  } catch (error) {
      res.send(error);
  }
};

//Delete Administrador 
exports.delete = async (req, res, next) =>{
  try {
    //Interacción con la base de datos
    await control.administrador.eliminar(req.params.userId);

    res.header('Access-Control-Allow-Origin', '*');
    res.status(204).json({
      status: 'success',
      administrador: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }   
}