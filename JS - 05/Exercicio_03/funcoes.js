let loopGenerated = false;

function registar(event) {
  event.preventDefault();

  let saida = document.getElementById("saida");
  let input_numero = document.getElementById("numero");

  saida.innerHTML = "";

  for (let i = 1; i <= input_numero.value; i++) {
    saida.innerHTML += `<p> ${i} <br> </p>`;
  }
}

function resetPage() {
  let saida = document.getElementById("saida");
  saida.innerHTML = "";
}
