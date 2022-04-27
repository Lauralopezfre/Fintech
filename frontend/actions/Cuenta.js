
async function getCuenta() {
    let response = await fetch(`http://localhost:5000/api/cuenta/`);
    let data = await response.json()
    return data.cuenta
}

async function eliminarCuenta(id) {
    await fetch('http://localhost:5000/api/cuenta/${id}', {
    method: 'DELETE'
});
location.reload();
}

 
  async function desplegarTabla() {
  
    const cuentas = await getCuenta()
    console.log(cuentas)
      
      // Crea un elemento <table> y un elemento <tbody>
      var tabla   = document.getElementsByTagName("table")[0];
      var tblBody = document.createElement("tbody");
      
      // Crea las celdas
      for (var i = 0; i < cuentas.length; i++) {
          // Crea las hileras de la tabla
          var hilera = document.createElement("tr")
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          var celda = document.createElement("td")
          var textoCelda = document.createTextNode(cuentas[i].titular.nombre);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
  
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(cuentas[i].tipoCuenta);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
  
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(cuentas[i].balance);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
      
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
      }
      
      // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody);
      
  }
  
  