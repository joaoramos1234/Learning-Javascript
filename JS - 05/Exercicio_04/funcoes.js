function registar(event) {
  event.preventDefault();

  let saida = document.getElementById("saida");
  let input_nome = document.getElementById("nome");

  saida.innerHTML += `<p> Bom dia ${input_nome.value} !</p>`;

  input_nome.value = "";
}
