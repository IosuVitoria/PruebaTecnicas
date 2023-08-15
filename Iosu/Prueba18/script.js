let mensaje = "El que se aburre no codifica";

const invertedMessage = (string) => {
    let newMessage = '';

    for (let i = string.length - 1; i >= 0; i--) {
        newMessage += string[i];
    }

    return newMessage;
}

const mensajeInvertido = invertedMessage(mensaje);
console.log(mensajeInvertido);