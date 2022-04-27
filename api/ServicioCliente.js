const mongoose = require('mongoose');
const control = require('../control/control');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt')
const MiddlewareError = require('../helpers/MiddlewareError');
const { validarPassword, validarEmail } = require('../controller/validaciones');

//Crear un cliente 
exports.insert =  async (req, res, next) =>{
  try {
    //Validación
    if(validarPassword(req.body.contrasenia) == false){
      return next(new MiddlewareError('El password no es correcto', 400));
    }
    
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(req.body.contrasenia, salt );

    //Validación
    if(validarEmail(req.body.email) == false){
      return next(new MiddlewareError('La dirección de email no es correcta', 404));
    }

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
        req.body.tipoCuenta,
        req.body.tipoTarjeta,
        req.body.telefono
    )

    var token = await generarJWT(req.body.userId, req.body.nombre);
    
    res.header('Access-Control-Allow-Origin', "*");
    res.status(201).json({
      cliente: cliente,
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
    const clientes = await control.cliente.obtenerTodos()

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'sucess',
      clientes: clientes
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Obtener cliente 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    const clientes = await control.cliente.obtener(req.params.userId)
    
    if(!clientes[0]){
      return next(new MiddlewareError('El cliente no fue encontrado', 404));
    }
    
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      clientes: clientes[0]
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Update cliente
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    await control.cliente.actualizar(
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

    const cliente = await control.cliente.obtener(req.params.userId)
     
    if(!cliente[0]){
      return next(new MiddlewareError('El cliente no fue encontrado', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
    status: 'success',
    cliente: (cliente[0])
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });}
};

//Delete cliente 
exports.delete = async (req, res, next) =>{
  try {
    //Interacción con la base de datos
    await control.cliente.eliminar(req.params.userId);

    res.header('Access-Control-Allow-Origin', '*');
    res.status(204).json({
      status: 'success',
      cliente: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }   
}