const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
];

//Mi solución. 

function showUsers(array){
    const peopleUp20 = array.filter(person => person.edad > 20);
    const peopleFiltered = peopleUp20.filter(person => person.nombre.includes("o") && person.nombre.includes("n"));
    return peopleFiltered;
}

console.log(showUsers(usuarios));

//Código refactorizado

function filterUsersWithLetters(array, minAge, letters) {
    return array.filter(person => person.edad > minAge && letters.every(letter => person.nombre.includes(letter)));
}

const usuarios2 = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "María", edad: 20 },
    { nombre: "Juan", edad: 19 },
    { nombre: "Sofía", edad: 21 }
];

const resultado = filterUsersWithLetters(usuarios2, 20, ["o"]);
console.log(resultado);