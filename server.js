var express = require("express");
const app = require("./api/Middleware");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//Levantar el servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
