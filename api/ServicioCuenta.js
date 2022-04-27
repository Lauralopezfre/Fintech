const mongoose = require('mongoose');
const control = require('../control/control');const { cuenta, cliente } = require('../data/Conexion');
const MiddlewareError = require('../helpers/MiddlewareError');

//Crear un cuenta 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    const c = await control.cuenta.insertar(
      req.body.balance,
      req.body.estadoCuenta,
      req.body.reporte,
      req.body.tarjetaDebito,
      req.body.tipoCuenta,
      req.body.titular
    )

    res.header('Access-Control-Allow-Origin', '*');
    res.status(201).json({
      status: 'success',
      data: {
        cuenta: c
      }
    });

  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//Obtener la lista de cuentas 
exports.getAll = async (req, res) =>{
  try{
    // Interacción con el acceso a datos
    const cuentas = await control.cuenta.obtenerTodos()

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'sucess',
      cuenta: cuentas
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Obtener cuenta 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    const cliente = await control.cliente.obtener(req.params.userId)
    const cuenta = await control.cuenta.obtener(cliente[0])

    if(!cuenta[0]){
      return next(new MiddlewareError('La cuenta no fue encontrada', 404));
    }


    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'sucess',
      cuenta: cuenta[0]
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Update cuenta
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    await control.administrador.actualizar(
      req.body.balance,
      req.body.estadoCuenta,
      req.body.reporte,
      req.body.tarjetaDebito,
      req.body.tipoCuenta,
      req.body.titular)


    const cliente = await control.cliente(req.params.userId)

    if(!cliente[0]){
      return next(new MiddlewareError('El cliente no fue encontrado', 404));
    }

    const cuenta = await control.cuenta.obtener(cliente[0])

    if(!cuenta[0]){
      return next(new MiddlewareError('La cuenta no fue encontrada', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      cuenta: (cuenta[0])
      });

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//Delete cuenta 
exports.delete = async (req, res, next) =>{
  try {
    const cliente = await control.cliente.obtener(req.params.userId)

    if(!cliente[0]){
      return next(new MiddlewareError('El cliente no fue encontrado', 404));
    }

    await control.cuenta.eliminar(cliente[0])

    res.header('Access-Control-Allow-Origin', '*');
    res.status(204).json({
      status: 'success',
      adminisstrador: null
    });

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }   
}