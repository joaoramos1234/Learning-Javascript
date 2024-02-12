function enviar() {
  intervalo = intervalo * 1000;
  document.getElementById("header").innerHTML += `<p>${total}</p>`;
  total++;
}

function limparIntervalo() {
  clearInterval(intervalo);
  alert("Intervalo limpo");
}
