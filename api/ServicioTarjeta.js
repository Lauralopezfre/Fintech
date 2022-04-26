const mongoose = require('mongoose');
const control = require('../control/control');
const { validarNumero } = require('../controller/validaciones');
const MiddlewareError = require('../helpers/MiddlewareError');

//Crear tarjeta 
exports.insert =  async (req, res, next) =>{
  try {
    //Validación
    // if(validarNumero(req.body.numero) == false){
    //   return next(new MiddlewareError("No es un número de Visa o Mastercard correcto", 404));
    // }

    // Interacción con el acceso a datos
    const tarjeta = await control.tarjeta.insertar(
        req.body.numero,
        req.body.chip,
        req.body.cvv,
        req.body.fechaVencimiento,
        req.body.entidadBancaria,
        req.body.clabeInterbancaria,
        req.body.tipoTarjeta
    )

    res.header('Access-Control-Allow-Origin', '*');
    res.status(201).json({
      status: 'success',
      data: {
        tarjeta: tarjeta
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
    const tarjetas = await control.tarjeta.obtenerTodos()

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      tarjetas: tarjetas
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
    const t = await control.tarjeta.obtener(req.params.numero)

    if(!t[0]){
      return next(new MiddlewareError('La tarjeta no fue encontrada', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      status: 'success',
      tarjeta: t[0]
    });
  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
}

//Update tarjeta
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    await control.tarjeta.actualizar(
        req.params.numero,
        req.body.chip,
        req.body.cvv,
        req.body.fechaVencimiento,
        req.body.entidadBancaria,
        req.body.clabeInterbancaria,
        req.body.tipoTarjeta)

    const tarjet = await control.tarjeta.obtener(req.params.numero)

    if(!tarjet[0]){
      return next(new MiddlewareError('La tarjeta no fue encontrada', 404));
    }

    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
    status: 'success',
    movimiento: (tarjet[0])
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

//Delete tarjeta 
exports.delete = async (req, res) =>{
  try {
    //Interacción con la base de datos
    await control.tarjeta.eliminar(req.params.numero);

    res.header('Access-Control-Allow-Origin', '*');
    res.status(204).json({
      status: 'success',
      tarjeta: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }   
}