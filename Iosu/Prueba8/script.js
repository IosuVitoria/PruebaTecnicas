// function enteroARomano(numero) {
//   //Primero variable para guardar el string final.
//   let resultado = ""
//   //listado de número romanos.
//   let caracteresRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV","I" ]
//   //El equivalente en números decimales.
//   const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
//   //Bucle para recorrer números decimales. Dentro otro bucle para iterar mientras el número sea mayor o igual al número decimal que estoy recorriendo.
//     for(let i = 0; i < valoresDecimales.length; i++){
//       console.log(valoresDecimales[i], caracteresRomanos[i]);
//       while(numero >= valoresDecimales[i]){
//         //Este bucle se realiza para agregar el caracter romano al resultado.
//         resultado += caracteresRomanos[i];
//         console.log(`Ahora estamos en la posición ${i} del array de romanos`);
//         console.log(`Estoy agregando el caracter ${caracteresRomanos[i]}`);
//         console.log(`En este paso el resultado es: ${resultado}`)
//          //Actualizar el número para restar el valor decimal que ya he aregado al resultado de números romanos.
//         numero -= valoresDecimales[i];
//       }
//     }
//   return resultado;
// }
// console.log(enteroARomano(1845));

function enteroARomano(numero) {
  if (typeof numero !== "number" || numero <= 0 || numero > 3999) {
    throw new Error("El número debe ser un entero positivo en el rango de 1 a 3999.");
  }

  const simbolos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  const valores = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let numeroRomano = "";

  for (let i = valores.length - 1; i >= 0; i--) {
    while (numero >= valores[i]) {
      numeroRomano += simbolos[i];
      numero -= valores[i];
    }
  }
  return numeroRomano;
}

function convertir() {
  const numero = parseInt(document.getElementById('numero').value);
  if (isNaN(numero) || numero <= 0 || numero > 3999) {
    alert("Ingresa un número válido entre 1 y 3999.");
    return false;
  }

  const resultado = enteroARomano(numero);

  document.getElementById('resultado').textContent = `El número romano es: ${resultado}`;
  return false; 
}

// Comprobación de funcionamiento algoritmo.
console.log(convertir(100)); 
console.log(convertir(345)); 


