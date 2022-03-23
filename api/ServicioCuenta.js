const mongoose = require('mongoose');
const control = require('../control/control');const { cuenta, cliente } = require('../data/Conexion');
;

//Crear un cuenta 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    control.cuenta.insertar(
      req.body.balance,
      req.body.estadoCuenta,
      req.body.reporte,
      req.body.tarjetaDebito,
      req.body.tipoCuenta,
      req.body.titular
    )
    res.status(201).json({
      status: 'success',
      data: {
        cuenta: req.body
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
    control.cuenta.obtenerTodos().then(cuenta => {
      res.send(cuenta)
    })
  }catch(err){
    res.send(err);
  }
}

//Obtener cuenta 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    control.cliente(req.params.userId).then(cliente => {
      control.cuenta.obtener(cliente[0]).then(cuenta => {
        res.send(cuenta[0])
      });
    });
  }catch(err){
    res.send(err);
  }
}

//Update cuenta
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    control.administrador.actualizar(
      req.body.balance,
      req.body.estadoCuenta,
      req.body.reporte,
      req.body.tarjetaDebito,
      req.body.tipoCuenta,
      req.body.titular)


    control.cliente(req.params.userId).then(cliente => {
      control.cuenta.obtener(cliente[0]).then(cuenta => {
        res.status(200).json({
          status: 'success',
          cuenta: (cuenta[0])
          });
      });
    });
  } catch (error) {
      res.send(error);
  }
};

//Delete cuenta 
exports.delete = async (req, res) =>{
  //Interacción con la base de datos
  

  try {
    control.cliente(req.params.userId).then(cliente => {
      control.cuenta.eliminar(cliente[0]).then(cuenta => {
        res.status(204).json({
          status: 'success',
          adminisstrador: null
        });
      });
    });
    
  } catch (error) {
      res.send(error);
  }   
}