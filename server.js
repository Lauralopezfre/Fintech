var express = require("express");
const router = require("./Routes/AppRoutes");
require("dotenv").config();

var app = express();

app.use(express.json());

//Ruta especifica
app.use("/api/administrador", router);

//Levantar el servidor
app.listen(7000, () => {
  console.log("Servidor corriendo en el puerto " + 7000);
});
