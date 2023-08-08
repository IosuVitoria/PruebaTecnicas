//Exercise 1: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

let mySheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
];
let mySheeps2 = [true,  true,  true,  false,
    false,  true,  true,  true ,
    false,  false, true,  false,
    true,  false, false, true ,
    true,  true,  false,  true ,
    false, false, true,  true
];


function countSheep(array){
    //En este caso lo único que hacemos es recorrer el array y ir sumando una unidad cada vez que nos encontramos con true.
    let arrayLength = array.length;
    let resultSheep = 0;

    for(let i = 0; i< arrayLength; i++){
        if(array[i] === true){
            resultSheep +=1
        }
    }

    return resultSheep;
}

console.log("Resultados del ejercicio 1")
console.log(countSheep(mySheeps));
console.log(countSheep(mySheeps2));

//Exercise 2: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let array = [];
    if(a<b){
        for(let i=a; i<=b; i++){
            array.push(i)
        }
        array.sort((a,b) => a-b) // Se usa Sort para ordenar los números.
        return array;
    }
    else if(a>b){
        for(let i=b; i<=a; i++){
            array.push(i)
        }
        array.sort((a,b) => b-a);
        return array;
    }
}

console.log("Resultados del ejercicio 2.")
console.log(between(1,9));
console.log(between(-17,9));

//Exercise 3: Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return this.valueOf() === this.toUpperCase();
};

console.log("Resultados del ejercicio 3.")
console.log("HELLO".isUpperCase()); // true
console.log("Hello".isUpperCase()); // false
console.log("123".isUpperCase());   // false
console.log("".isUpperCase());      // false
