async function getClientes() {
    let response = await fetch(`http://localhost:5000/api/cliente/`);
    let data = await response.json()
    return data.clientes
  }

var app7 = new Vue({
    el: '#app-vuejs',
    data: {
        clientes: getClientes(),
    },
    methods: {
        
    }
});