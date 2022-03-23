const mongoose = require('mongoose');
const control = require('../control/control');;

//Crear tarjeta 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    control.tarjeta.insertar(
        req.body.numero,
        req.body.chip,
        req.body.cvv,
        req.body.fechaVencimiento,
        req.body.entidadBancaria,
        req.body.clabeInterbancaria,
        req.body.tipoTarjeta
    )
    res.status(201).json({
      status: 'success',
      data: {
        tarjeta: req.body
      }
    });

  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//Obtener la lista de tarjetas 
exports.getAll = async (req, res) =>{
  try{
    // Interacción con el acceso a datos
    control.tarjeta.obtenerTodos().then(tarjeta => {
      res.send(tarjeta)
    })
  }catch(err){
    res.send(err);
  }
}

//Obtener movimiento 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    control.tarjeta.obtener(req.params.numero).then(tarjet => {
      res.send(tarjet[0])
    })
  }catch(err){
    res.send(err);
  }
}

//Update tarjeta
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    control.movimiento.actualizar(
        req.params.numero,
        req.body.chip,
        req.body.cvv,
        req.body.fechaVencimiento,
        req.body.entidadBancaria,
        req.body.clabeInterbancaria,
        req.body.tipoTarjeta)

    control.tarjeta.obtener(req.params.numero).then(tarjet => {
      res.status(200).json({
      status: 'success',
      movimiento: (tarjet[0])
      }); 
    })
  } catch (error) {
      res.send(error);
  }
};

//Delete tarjeta 
exports.delete = async (req, res) =>{
  //Interacción con la base de datos
  control.tarjeta.eliminar(req.params.numero);

  try {
    res.status(204).json({
      status: 'success',
      tarjeta: null
    });
  } catch (error) {
      res.send(error);
  }   
}