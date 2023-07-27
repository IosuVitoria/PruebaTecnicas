// Función para calcular la diferencia en días entre dos fechas
function calcularDiferenciaFechas() {
  // Obtener las fechas ingresadas por el usuario. Se usa una isntaciación del objeto date para que no haya problemas a la hora de manejar el dato.
  const fecha1 = new Date(document.getElementById('fecha1').value);
  console.log(fecha1);
  const fecha2 = new Date(document.getElementById('fecha2').value);
  console.log(fecha2);
  // Calcular la diferencia en milisegundos entre las dos fechas
  const diferenciaMilisegundos = Math.abs(fecha2 - fecha1);

  // Calcular la diferencia en días
  const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

  // Mostrar el resultado en el input con id "resultado"
  document.getElementById('resultado').value = diferenciaDias;
}

// Asociar el evento submit del formulario a la función de cálculo
document.getElementById('formFechas').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  calcularDiferenciaFechas();
});

//Prueba para obtener un año.

const fecha = new Date();
const año = fecha.getFullYear();
console.log(año);