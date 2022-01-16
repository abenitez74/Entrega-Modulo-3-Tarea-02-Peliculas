const datosPersona = document.getElementById('datosPersona');
var guardado = localStorage.getItem('datos');

const data=JSON.parse(guardado);

console.log(data.nom);
datosPersona.innerHTML+=`
Nombre: ${data.nom}<br> 
Apellido: ${data.ape}<br>
Telefono: ${data.tel}<br>
Direccion ${data.dir}`
