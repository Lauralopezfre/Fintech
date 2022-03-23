const mongoose = require('mongoose');
const control = require('../control/control');;

//Crear un administrador 
exports.insert =  async (req, res) =>{
  try {
    // Interacción con el acceso a datos
    // control.administrador.insertar(
    //     req.body.userId,
    //     req.body.nombre,
    //     req.body.contrasenia,
    //     req.body.fechaRegistro,
    //     req.body.email,
    //     req.body.nombreAdministrador,
    //     req.body.area,
    //     req.body.puesto,
    //     req.body.telefono
    // )
    // res.status(201).json({
    //   status: 'Se ha almacenado en la base de datos el administrador',
    //   data: {
    //     administrador: req.body
    //   }
    // });
    
    res.status(201).json({
      status: 'sucess',
      data: {
        administrador: req.body
      }
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
    // control.administrador.obtenerTodos().then(admin => {
    //   res.send(admin)
    // })

    // Respuesta dummy
    dummy = [{
        "userId": "390",
        "nombre": "Angel de jesus",
        "contrasenia": "angel1232!",
        "fechaRegistro": "25/11/2019",
        "email": "angel_jesus@hotmail.com",
        "nombreAdministrador": "Representante",
        "area": "Administrativa",
        "puesto": "Gerencial",
        "telefono": "6444105210",
      },
      {
        "userId": "100",
        "nombre": "Veronica Reyes",
        "contrasenia": "veronica2413!",
        "fechaRegistro": "25/12/2021",
        "email": "verovero@gmail.com",
        "nombreAdministrador": "Local",
        "area": "Administrativa",
        "puesto": "Local",
        "telefono": "6871596633",
      }
    ]
    res.send(dummy);
  }catch(err){
    res.send(err);
  }
}

//Obtener administrador 
exports.get = async (req, res, next) =>{
  try{
    // Interacción con el acceso a datos
    // control.administrador.obtener(req.params.userId).then(admin => {
    //   res.send(admin[0])
    // })

    //Respuesta dummy
    dummy = {
      "userId": req.params.userId,
      "nombre": "Angel de jesus",
      "contrasenia": "angel1232!",
      "fechaRegistro": "25/11/2019",
      "email": "angel_jesus@hotmail.com",
      "nombreAdministrador": "Representante",
      "area": "Administrativa",
      "puesto": "Gerencial",
      "telefono": "6444105210",
  }
    res.send(dummy)
  }catch(err){
    res.send(err);
  }
}

//Update Administrador
exports.update = async (req, res, next) => {
  try {
    // Interacción con el acceso a datos
    // control.administrador.actualizar(
    //   req.body.userId,
    //   req.body.nombre,
    //   req.body.contrasenia,
    //   req.body.fechaRegistro,
    //   req.body.email,
    //   req.body.nombreAdministrador,
    //   req.body.area,
    //   req.body.puesto,
    //   req.body.telefono)

    // control.administrador.obtener(req.params.userId).then(admin => {
    //   res.status(200).json({
    //   status: 'success',
    //   administrador: admin[0]
    //   }); 
    // })

    // Respuesta dummy
    dummy = {
      "userId": req.params.userId,
      "nombre": "Angel de jesus",
      "contrasenia": "angel1232!",
      "fechaRegistro": "25/11/2019",
      "email": "angel_jesus@hotmail.com",
      "nombreAdministrador": "Representante",
      "area": "Administrativa",
      "puesto": "Gerencial",
      "telefono": "6444105210",
    }

    res.status(200).json({
      status: 'success',
      administrador: dummy
    }); 
  } catch (error) {
      res.send(error);
  }
};

//Delete Administrador 
exports.delete = async (req, res) =>{

  try {
    res.status(204).json({
      status: 'success',
      adminisstrador: null
    });
  } catch (error) {
      res.send(error);
  }
    
}