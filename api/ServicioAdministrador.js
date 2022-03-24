const mongoose = require('mongoose');
const control = require('../control/control');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt')
const jwt = require('jsonwebtoken')

//Crear un administrador 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    
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
    control.administrador.obtenerTodos().then(admin => {
      res.send(admin)
    })
  }catch(err){
    res.send(err);
  }
}

//Obtener administrador 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    control.administrador.obtener(req.params.userId).then(admin => {
      res.send(admin[0])
    })
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

    await control.administrador.obtener(req.params.userId).then(admin => {
      res.status(200).json({
      status: 'success',
      administrador: (admin[0])
      }); 
    })
  } catch (error) {
      res.send(error);
  }
};

//Delete Administrador 
exports.delete = async (req, res) =>{
  //Interacción con la base de datos
  control.administrador.eliminar(req.params.userId);

  try {
    res.status(204).json({
      status: 'success',
      adminisstrador: null
    });
  } catch (error) {
      res.send(error);
  }   
}