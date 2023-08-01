// 1º Agregar el número o símbolo al Display.

function appendToDisplay(value) {
    // Para ello capturo el número que tengo en el botón mediante el onclick y lo que hago es añadirlo al valor que hay previamente. Explicación entrada de datos.
    // console.log(value);
    // console.log(typeof(value));
    // let num1 = "1";
    // let num2 = "2";
    // let num3 = eval(num1+ "+" + num2);
    // console.log(num3);
    // console.log(typeof(num3));
    document.getElementById("display").value += value;
}

//2º Me aseguro de que las funciones con trabajos a parte de lo aritmético funcionen. 

function clearDisplay() {
    //Coge el valor de display y lo pone vacío. De ahí el uso de las comillas sin ni siquiera un espacio. 
    document.getElementById("display").value = "";
}
  
function deleteLast() {
    //Borrar el último número. Para ello capturamos el display y aplicamos el método slice con el intervalo (0, -1). 
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

//3º Calcular y evitar errores por parte de la calculadora. 

function calculateResult() {
    let currentValue = document.getElementById("display").value;
    // console.log(currentValue);
    // console.log(typeof(currentValue));
    try {
      let result = eval(currentValue);
      document.getElementById("display").value = result;
    } catch (error) {
        //Capturo errores como divisiones por 0.
      document.getElementById("display").value = "Error";
    }
}
  