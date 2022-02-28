module.exports= class Tarjeta {
    constructor(
        numero,
        chip,
        cvv,
        fechaVencimiento,
        entidadBancaria,
        clabeInterbancaria,
        tipoTarjeta
    ){
        this.numero = numero
        this.chip = chip
        this.cvv = cvv
        this.fechaVencimiento = fechaVencimiento
        this.entidadBancaria = entidadBancaria
        this.clabeInterbancaria = clabeInterbancaria
        this.tipoTarjeta = tipoTarjeta
    }

    consultarSaldo(){

    }

    retirar(){

    }

    trasferir(){
        
    }
}