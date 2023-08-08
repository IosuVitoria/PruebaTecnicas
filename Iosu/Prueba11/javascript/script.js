function mostrarNumero() {
    const abacoInput = document.getElementById('abacoInput').value;
    try {
      const abaco = JSON.parse(abacoInput);
      const numero = obtenerNumeroAbaco(abaco);
      document.getElementById('resultado').innerText = `Resultado: ${numero}`;
    } catch (error) {
      document.getElementById('resultado').innerText = 'Error: Formato de ábaco inválido';
    }
  }
  
  function obtenerNumeroAbaco(abaco) {
    const valores = [
      1000000, 100000, 10000, 1000, 100, 10, 1
    ];
  
    let numero = 0;
    for (let i = 0; i < abaco.length; i++) {
      const cuenta = abaco[i].split('---')[0];
      const cantidadO = cuenta.split('O').length - 1;
      numero += cantidadO * valores[i];
    }
  
    return numero;
  }
  