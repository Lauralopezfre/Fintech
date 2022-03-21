const mongoose = require('mongoose');
const control = require('../control/control');;

//Crear un administrador 
exports.insertarAdministrador =  async (req, res) =>{
 
  try {
    control.administrador.insertar(
        req.body.userId,
        req.body.nombre,
        req.body.contrasenia,
        req.body.fechaRegistro,
        req.body.email,
        req.body.nombreAdministrador,
        req.body.area,
        req.body.puesto,
        req.body.telefono
    )
    res.status(201).json({
      status: 'sucess',
      data: {
        user: req.body
      }
    });

  }catch(err){
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

// //Obtener la lista de usuarios 
// exports.getAllUsers = async (req, res) =>{
//   try{
//      const usuarios = await userModel.find();
//      res.send(usuarios);
//   }catch(err){
//     res.send(err);
//   }
// }

// //Obtener usuario 
// exports.getUser = catchAsync(async (req, res, next) =>{
  
    
//   const user = await userModel.findById(req.params.id);

//   if(!user){
//     return next(new AppError('Not user found with the ID', 404));
//   }
  
//   res.status(200).json({
//     status: 'sucess',
//     data:{
//       user
//     }
//   });
// });

// //Update User 
// exports.updateUser = catchAsync(async (req, res, next) => {
//   const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });

//   if (!user) {
//     return next(new AppError('No tour found with that ID', 404));
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       user
//     }
//   });
// });


// //Delete User 
// exports.deleteUser = catchAsync(async (req, res, next) =>{
//     const user = await userModel.findByIdAndDelete(req.params.id);

//     if(!user){
//       return next(new AppError('No tour found with that ID', 404));
//     }

//     res.status(204).json({
//       status: 'success',
//       data: null
//     });
// })




