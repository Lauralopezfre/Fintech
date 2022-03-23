const mongoose = require('mongoose');
const control = require('../control/control');;

//Crear un movimiento 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    control.movimiento.insertar(
        req.body.idMovimiento,
        req.body.cantidad,
        req.body.claveRastreo,
        req.body.fechaHora,
        req.body.bancoReceptor
    )
    res.status(201).json({
      status: 'success',
      data: {
        movimiento: req.body
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
    control.movimiento.obtenerTodos().then(mov => {
      res.send(mov)
    })
  }catch(err){
    res.send(err);
  }
}

//Obtener movimiento 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    control.movimiento.obtener(req.params.idMovimiento).then(mov => {
      res.send(mov[0])
    })
  }catch(err){
    res.send(err);
  }
}

//Update movimiento
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    control.movimiento.actualizar(
        req.params.idMovimiento,
        req.body.cantidad,
        req.body.claveRastreo,
        req.body.fechaHora,
        req.body.bancoReceptor)

    control.movimiento.obtener(req.params.idMovimiento).then(mov => {
      res.status(200).json({
      status: 'success',
      movimiento: (mov[0])
      }); 
    })
  } catch (error) {
      res.send(error);
  }
};

//Delete movimiento 
exports.delete = async (req, res) =>{
  //Interacción con la base de datos
  control.movimiento.eliminar(req.params.idMovimiento);

  try {
    res.status(204).json({
      status: 'success',
      movimiento: null
    });
  } catch (error) {
      res.send(error);
  }   
}