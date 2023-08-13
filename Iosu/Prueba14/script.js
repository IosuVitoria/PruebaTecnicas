//Para contar todas las letras del array.

let frases = [
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
];

function contarLetras(array){
    console.log(array.length);
    let sumTotal = 0;
    for(let i = 0; i < array.length; i++){
        // console.log(array[i]);
        for(let j = 0; j < array[i].length; j++){
            // console.log(array[i][j]);
            if(array[i][j] !== " " && array[i][j] !== ","){
                sumTotal+=1;
            }
        }
    }
    return sumTotal;
}

console.log(contarLetras(frases));

//Para contar todas las palabras del array.

let frases2 = [
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
];

function contarPalabras(array){
    // console.log(array.length);
    console.log("Esta es la segunda versión del problema.")
    let sumTotal = 0;
    for(let i = 0; i < array.length; i++){
        let arrayPhrase = array[i].split(" ");
        sumTotal += arrayPhrase.length;
    }
    return sumTotal;
}

console.log(contarPalabras(frases2));