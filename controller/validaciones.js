const MiddlewareError = require('../helpers/MiddlewareError');

function validarEmail(valor) {
  if ((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(valor)){
    return true
  }
  return false
}

function validarPassword(value){
  var espacios = false;
  var cont = 0; 

  while (!espacios && (cont < value.length)) {
    if (value.charAt(cont) == " ")
      espacios = true;
    cont++;
  }
    
  if (espacios) {
    return false
  }
}

function validarNumero(numero) {
  if (!numero.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
    visa_error = "No es un número de Visa correcto";
    // return new MiddlewareError(visa_error, 400);
    return false

  }else if (!numero.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
    mastercard_error = "No es un número de Visa correcto";
    // return new MiddlewareError(mastercard_error, 400);
    return false
  }
  return true
}

module.exports = {
  validarEmail,
  validarNumero,
  validarPassword
}