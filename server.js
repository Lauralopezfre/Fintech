var express = require("express");
const app = require("./api/Middleware");
const cost = require("cors");

require("dotenv").config();

app.use(cost());
const PORT = process.env.PORT

//Levantar el servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
