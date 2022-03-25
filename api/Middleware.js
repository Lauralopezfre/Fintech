var express = require("express");
const {routerCliente, routerAdministrador, routerTarjeta, routerMovimiento, routerCuenta } = require("../routes/AppRoutes");
var morgan = require('morgan')

var app = express();

app.use(morgan('combined'))
app.use(express.json());

app.use("/api/administrador", routerAdministrador);
app.use("/api/cliente", routerCliente);
app.use("/api/cuenta", routerCuenta);
app.use("/api/movimiento", routerMovimiento);
app.use("/api/tarjeta", routerTarjeta);
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(404).send('Algo salio mal!');
});

module.exports = app

