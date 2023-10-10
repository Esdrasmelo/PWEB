function encontrarMaiorNumero() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const numero3 = document.getElementById("numero3").value;

    console.log(numero1)

  document.getElementById("resultadoMaiorNumero").innerText = Math.max(numero1, numero2, numero3);
}

function ordenarNumerosCrescente() {
    const numero1 = document.getElementById("numero4").value;
    const numero2 = document.getElementById("numero5").value;
    const numero3 = document.getElementById("numero6").value;

  var numerosOrdenados = [numero1, numero2, numero3];
  numerosOrdenados.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("resultadoOrdenados").innerText = numerosOrdenados;
}
