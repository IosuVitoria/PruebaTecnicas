document.addEventListener("DOMContentLoaded", () => {
    const palabraDisplay = document.getElementById("word-display");
    const remainingAttemptsDisplay = document.getElementById("remaining-attempts");
    const letterInput = document.getElementById("letter-input");
    const guessButton = document.getElementById("guess-button");
  
    let palabraSecreta = prompt("Ingresa la palabra secreta:");
    if (!palabraSecreta) {
      alert("No ingresaste una palabra válida. El juego ha sido cancelado.");
      return;
    }
  
    palabraSecreta = palabraSecreta.toLowerCase();
    const longitudPalabra = palabraSecreta.length;
    let intentos = 5;
    let palabraDescubierta = Array(longitudPalabra).fill("_");
  
    function updateGameDisplay() {
      palabraDisplay.textContent = palabraDescubierta.join(" ");
      remainingAttemptsDisplay.textContent = `Tienes ${intentos} intento(s) restante(s).`;
    }
  
    updateGameDisplay();
  
    guessButton.addEventListener("click", () => {
      const letra = letterInput.value.toLowerCase();
  
      if (!letra || letra.length !== 1) {
        alert("Ingresa una letra válida.");
        return;
      }
  
      if (palabraSecreta.includes(letra)) {
        alert(`¡Bien hecho! La letra "${letra}" está en la palabra.`);
        for (let i = 0; i < longitudPalabra; i++) {
          if (palabraSecreta[i] === letra) {
            palabraDescubierta[i] = letra;
          }
        }
      } else {
        alert(`La letra "${letra}" no está en la palabra.`);
        intentos--;
      }
  
      updateGameDisplay();
  
      if (!palabraDescubierta.includes("_")) {
        alert("¡Felicidades! Has adivinado la palabra: " + palabraSecreta);
        letterInput.disabled = true;
        guessButton.disabled = true;
      } else if (intentos === 0) {
        alert("¡Oh no! Te has quedado sin intentos. La palabra era: " + palabraSecreta);
        letterInput.disabled = true;
        guessButton.disabled = true;
      }
    });
  });
  