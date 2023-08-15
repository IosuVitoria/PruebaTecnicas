const mostrarResultado = (elementId, resultado) => {
    document.getElementById(elementId).textContent = resultado;
};

document.getElementById('calcularContarCaracteres').addEventListener('click', () => {
    const inputContarCaracteres = document.getElementById('inputContarCaracteres').value;
    const resultado = inputContarCaracteres.length;
    mostrarResultado('resultadoContarCaracteres', `Longitud: ${resultado}`);
});

document.getElementById('calcularConvertirMayusculas').addEventListener('click', () => {
    const inputConvertirMayusculas = document.getElementById('inputConvertirMayusculas').value;
    const resultado = inputConvertirMayusculas.toUpperCase();
    mostrarResultado('resultadoConvertirMayusculas', `Mayúsculas: ${resultado}`);
});

document.getElementById('calcularConvertirMinusculas').addEventListener('click', () => {
    const inputConvertirMinusculas = document.getElementById('inputConvertirMinusculas').value;
    const resultado = inputConvertirMinusculas.toLowerCase();
    mostrarResultado('resultadoConvertirMinusculas', `Minúsculas: ${resultado}`);
});

document.getElementById('calcularRecortarTexto').addEventListener('click', () => {
    const inputRecortarTexto = document.getElementById('inputRecortarTexto').value;
    const inputLongitudRecortarTexto = document.getElementById('inputLongitudRecortarTexto').value;
    const resultado = inputRecortarTexto.slice(0, inputLongitudRecortarTexto);
    mostrarResultado('resultadoRecortarTexto', `Recortado: ${resultado}`);
});

document.getElementById('calcularEncontrarSubcadena').addEventListener('click', () => {
    const inputEncontrarSubcadena = document.getElementById('inputEncontrarSubcadena').value;
    const inputSubcadenaEncontrarSubcadena = document.getElementById('inputSubcadenaEncontrarSubcadena').value;
    const resultado = inputEncontrarSubcadena.includes(inputSubcadenaEncontrarSubcadena);
    mostrarResultado('resultadoEncontrarSubcadena', `Contiene Subcadena: ${resultado}`);
});

document.getElementById('calcularReemplazarSubcadena').addEventListener('click', () => {
    const inputReemplazarSubcadena = document.getElementById('inputReemplazarSubcadena').value;
    const inputSubcadenaReemplazarSubcadena = document.getElementById('inputSubcadenaReemplazarSubcadena').value;
    const inputNuevaSubcadenaReemplazarSubcadena = document.getElementById('inputNuevaSubcadenaReemplazarSubcadena').value;
    const resultado = inputReemplazarSubcadena.replace(inputSubcadenaReemplazarSubcadena, inputNuevaSubcadenaReemplazarSubcadena);
    mostrarResultado('resultadoReemplazarSubcadena', `Reemplazado: ${resultado}`);
});

document.getElementById('calcularDividirString').addEventListener('click', () => {
    const inputDividirString = document.getElementById('inputDividirString').value;
    const inputSeparadorDividirString = document.getElementById('inputSeparadorDividirString').value;
    const resultado = inputDividirString.split(inputSeparadorDividirString);
    mostrarResultado('resultadoDividirString', `Dividido: ${resultado}`);
});

document.getElementById('calcularEliminarEspacios').addEventListener('click', () => {
    const inputEliminarEspacios = document.getElementById('inputEliminarEspacios').value;
    const resultado = inputEliminarEspacios.trim();
    mostrarResultado('resultadoEliminarEspacios', `Sin Espacios: ${resultado}`);
});

document.getElementById('calcularExtraerParte').addEventListener('click', () => {
    const inputExtraerParte = document.getElementById('inputExtraerParte').value;
    const inputInicioExtraerParte = document.getElementById('inputInicioExtraerParte').value;
    const inputLongitudExtraerParte = document.getElementById('inputLongitudExtraerParte').value;
    const resultado = inputExtraerParte.substr(inputInicioExtraerParte, inputLongitudExtraerParte);
    mostrarResultado('resultadoExtraerParte', `Parte Extraída: ${resultado}`);
});