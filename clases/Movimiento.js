module.exports = class Movimiento {
    constructor(
        idMovimiento,
        cantidad,
        claveRastreo,
        fechaHora,
        bancoReceptor
    ){
        this.idMovimiento = idMovimiento,
        this.cantidad = cantidad,
        this.claveRastreo = claveRastreo,
        this.fechaHora = fechaHora,
        this.bancoReceptor = bancoReceptor
    }
}