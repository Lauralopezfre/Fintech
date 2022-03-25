const mongoose = require('mongoose');
const control = require('../control/control');
const MiddlewareError = require('../helpers/MiddlewareError');

//Crear un movimiento 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    const mov = await control.movimiento.insertar(
        req.body.idMovimiento,
        req.body.cantidad,
        req.body.claveRastreo,
        req.body.fechaHora,
        req.body.bancoReceptor
    )
    res.status(201).json({
      status: 'success',
      data: {
        movimiento: mov
      }
    });

  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//Obtener la lista de movimiento 
exports.getAll = async (req, res) =>{
  try{
    // Interacción con el acceso a datos
    const mov = await control.movimiento.obtenerTodos()
    res.status(200).json({
      status: 'sucess',
      movimientos: mov
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Obtener movimiento 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    const mov = await control.movimiento.obtener(req.params.idMovimiento)

    if(!mov[0]){
      return next(new MiddlewareError('El movimiento no fue encontrado', 404));
    }

    res.status(200).json({
      status: 'sucess',
      movimientos: mov[0]
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Update movimiento
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    await control.movimiento.actualizar(
        req.params.idMovimiento,
        req.body.cantidad,
        req.body.claveRastreo,
        req.body.fechaHora,
        req.body.bancoReceptor)

    const mov = await control.movimiento.obtener(req.params.idMovimiento)

    if(!mov[0]){
      return next(new MiddlewareError('El movimiento no fue encontrado', 404));
    }
    
    res.status(200).json({
      status: 'success',
      movimiento: (mov[0])
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

//Delete movimiento 
exports.delete = async (req, res, next) =>{
  try {
    //Interacción con la base de datos
    await control.movimiento.eliminar(req.params.idMovimiento);

    res.status(204).json({
      status: 'success',
      movimiento: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }   
}