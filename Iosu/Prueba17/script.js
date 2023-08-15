
// function generarMatriz(num){
//     let numbers = [];
//     let limit = num*num;
//     for(let i = 1; i <= limit; i++){
//         numbers.push(i);
//     }
//     console.log(numbers);
// }

// generarMatriz(8);

function generarMatriz(n) {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < n; i++) {
        console.log(`En este caso i vale: ${i} y se agrega un nueva fila a la matriz`)
        matriz.push([]); 
        for (let j = 0; j < n; j++) {
            console.log(`En este caso, para la posición ${j} del array se agrega el número: ${contador}`);
            matriz[i].push(contador); 
            contador++;
        }
    }

    return matriz;
}

const resultado = generarMatriz(3);
console.log(resultado);
