var identificacion = ""

function getId(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

async function getClientes() {
  let response = await fetch(`http://localhost:5000/api/cliente/`);
  let data = await response.json()
  return data.clientes
}

async function postCliente(cliente) {

    // No funciona por el cors
    const response = await fetch(`http://localhost:5000/api/cliente/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    console.log(response.json);
}

async function eliminarCliente(id) {
    const response = await fetch('http://localhost:5000/api/cliente/${id}', {
    method: 'DELETE'
    });

    console.log(response);
}

function cargarArchivos(file) {
    identificacion = file.name
  }

function crearCliente(){
    const nombre = document.getElementsByName("nombrecompleto")[0].value;
    const contrasenia = document.getElementsByName("contrasenia")[0].value;
    const rfc = document.getElementsByName("rfc")[0].value;
    const direccion = document.getElementsByName("direccion").value;
    const telefono = document.getElementsByName("telefono")[0].value;
    const email = document.getElementsByName("email")[0].value;
    let tipoCuenta;
    let tipoTarjeta;

    if (document.getElementsByName('cheques')[0].checked) {
        tipoCuenta = 'cheques'
    } else if(document.getElementsByName('ahorros')[0].checked){
        tipoCuenta = 'ahorros'
    }

    if (document.getElementsByName('visa')[0].checked) {
        tipoTarjeta = 'visa'
    } else if(document.getElementsByName('mastercard')[0].checked){
        tipoTarjeta = 'mastercard'
    }

    const cliente = {
        userId: getId(2000, 8000),
        nombre: nombre,
        contrasenia: contrasenia,
        fechaRegistro: new Date(),
        email: email,
        rfc: rfc,
        direccion: direccion,
        identificacion: identificacion,
        cantidadCuentas: 1,
        telefono: telefono,
        tipoCuenta: tipoCuenta,
        tipoTarjeta: tipoTarjeta,
    }
    postCliente(cliente);
}

async function desplegarTabla() {

    const clientes = await getClientes();
    console.log(clientes);
    
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.getElementsByTagName("table")[0];
    var tblBody = document.createElement("tbody");
    
    // Crea las celdas
    for (var i = 0; i < clientes.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(clientes[i].userId);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(clientes[i].nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(clientes[i].telefono);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(clientes[i].direccion);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(clientes[i].fechaRegistro);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
    
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    
}

