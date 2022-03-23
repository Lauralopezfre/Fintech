var express = require("express");
const {routerCliente, routerAdministrador, routerTarjeta, routerMovimiento, routerCuenta } = require("./Routes/AppRoutes");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

var app = express();

app.use(express.json());

//Ruta especifica
app.use("/api/administrador", routerAdministrador);
app.use("/api/cliente", routerCliente);
app.use("/api/cuenta", routerCuenta);
app.use("/api/movimiento", routerMovimiento);
app.use("/api/tarjeta", routerTarjeta);

//Levantar el servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
