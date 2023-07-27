function ahorcado(palabra) {
    let intentos = 5;
    let palabraArray = palabra.split("");
    console.log(palabraArray);
    let letraUser = "";
  
    for (let i = 1; i <= 5; i++) {
      letraUser = prompt("Introduce la letra");
      if (palabraArray.includes(letraUser)) {
        intentos = 5 - i;
        alert(`Has acertado la letra ${letraUser}.`);
        alert(`Te quedan ${intentos} intentos de 5 posibles.`);
  
        if (intentos === 0) {
          alert("¡Ganaste! Has adivinado la palabra.");
          return;
        }
  
        let opcion = prompt("Deseas adivinar la palabra?");
        if (opcion.toLowerCase() === "si") {
          let palabraFinal = prompt("Introduce la palabra que crees que es");
          if (palabraFinal.toLowerCase() === palabra.toLowerCase()) {
            alert("¡Felicitaciones! Has adivinado la palabra.");

            return;
          } else {
           alert("La palabra introducida es incorrecta.");
           alert(`Te quedan ${intentos} intentos de 5 posibles.`);
          }
        }
      } else {
        intentos = 5-i;
        alert(`La letra ${letraUser} no está en la palabra.`);
      }
    }
  
    alert("Se te han agotado los intentos. ¡Perdiste!");
  }
  
  ahorcado("vanadio");
  