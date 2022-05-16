async function getClientes() {
    let response = await fetch(`http://localhost:5000/api/cliente/`);
    let data = await response.json()
    return data.clientes
  }

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        clientes: getClientes(),
    }
});