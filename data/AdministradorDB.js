const Colecciones = require("../data/Conexion");

const insertar = async(administrador) => {
  try{
    return await new Colecciones.administrador(administrador);
  }catch(error) {
    console.log("Ha ocurrido un error: " + error);
    return null
  }
};

const remover = (administrador) => {
  const borrarAdministrador = async () => {
    return await Colecciones.administrador.deleteOne(administrador);
  };

  borrarAdministrador()
    .then(() => {
      console.log("El admin ha sido borrado");
    })
    .catch((error) => {
      console.log("El admin no ha sido borrado por: " + error);
    });
};

const obtenerTodos = async () => {
  return await Colecciones.administrador.find().sort();
};

const obtener = async (userId) => {
  return await Colecciones.administrador.find({ userId: userId }).sort();
};

const actualizar = async (a) => {
  const actualizarAdmin = await Colecciones.administrador.updateOne(
    { userId: a.userId },
    {
      $set: {
        userId: a.userId,
        nombre: a.nombre,
        contrasenia: a.contrasenia,
        fechaRegistro: a.fechaRegistro,
        email: a.email,
        nombreAdministrador: a.email,
        area: a.area,
        puesto: a.puesto,
        telefono: a.telefono,
      },
    }
  );
};

module.exports = AdministradorsDB = {
  insertar: insertar,
  eliminar: remover,
  obtenerTodos: obtenerTodos,
  obtener: obtener,
  actualizar: actualizar,
};
