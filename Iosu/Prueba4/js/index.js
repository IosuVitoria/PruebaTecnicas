// function ordenarPorApellidos(personas) {
//     // Primero creamos una variable con un nuevo array de apellidos.
//     const apellidos = personas.map(persona => persona.split(" ")[1]);
    
//     // Ordenar los apellidos.
//     apellidos.sort();
  
//     // Creamos un nuevo array con los nombres y los apellidos ya ordenados.
//     const personasOrdenadas = apellidos.map(apellido => {
//       const nombreCompleto = personas.find(nombreCompleto => nombreCompleto.split(" ")[1] === apellido);
//       return nombreCompleto;
//     });
    
//     return personasOrdenadas;
// } 
  
// const personas = [
//     "Víctor Robles",
//     "Antonio Alcantara",
//     "Al Pacino",
//     "Robert DeNiro",
//     "Brad Pitt",
//     "Sylvester Stallone"
// ];
  
// console.log(ordenarPorApellidos(personas));


function ordenarPorApellidos(personas) {
  // Ordenar el array 'personas' según los apellidos.
  personas.sort((a, b) => {
    const apellidoA = a.split(" ")[1];
    const apellidoB = b.split(" ")[1];
    return apellidoA.localeCompare(apellidoB);
  });

  return personas;
}

function ordenarNombres() {
  const inputArea = document.getElementById("inputArea");
  const outputList = document.getElementById("outputList");

  const inputText = inputArea.value;
  const personas = inputText.split("\n").filter(line => line.trim() !== "");

  const personasOrdenadas = ordenarPorApellidos(personas);

  // Limpiar la lista antes de mostrar los nombres ordenados.
  outputList.innerHTML = "";

  personasOrdenadas.forEach(nombreCompleto => {
    const listItem = document.createElement("li");
    listItem.textContent = nombreCompleto;
    listItem.classList.add("show"); // Agregar la clase 'show' para la animación.
    outputList.appendChild(listItem);
  });
}
