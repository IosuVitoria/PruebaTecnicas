//1º Ordena el presente array de manera ascendente. let arrayNumeros = [5,4,3,9,8,7,10,25,36].

let arrayNumeros = [5,4,3,9,8,7,10,25,36];

arrayNumeros.sort();
console.log("Ejercicio 1. Ordenar números de manera ascendente.")
console.log(arrayNumeros);

//De esta manera ordena sólo por el primer número.

arrayNumeros.sort((a, b) => a - b);

console.log(arrayNumeros);

//Usando los parámetros conseguimos ordenar según todos los números de cada elemento del array. 

//2º Ordena el mismo array de manera descendente.

arrayNumeros.sort((a,b) => b-a);

console.log("Ejercicio 2. Ordenar de manera descendente.")
console.log(arrayNumeros);

//3º Ordenar un array de objetos por una propiedad numérica en orden ascendente.

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];

personas.sort((a, b) => a.edad - b.edad);

console.log("Ejercicio 3. Ordenar objetos por la propiedad numérica.")
console.log(personas);

//4º Ordenar un array de objetos por una propiedad numérica en orden ascendente.

personas.sort((a, b) => b.edad - a.edad);

console.log("Ejercicio 4. Ordenar objetos por la propiedad numérica. Sentido descendente.")
console.log(personas);

//5º Ordenar un array de objetos por una propiedad de cadena en orden alfabético.

const personas2 = [
    { nombre: "Juan", apellido: "Gómez" },
    { nombre: "María", apellido: "López" },
    { nombre: "Pedro", apellido: "Fernández" }
];

personas2.sort((a, b) => a.apellido.localeCompare(b.apellido));

console.log("Ejercicio 5. Ordenar un array de objetos en función del apellido.")

console.log(personas2);
