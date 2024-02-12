function calcularIMC(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let registo = document.getElementById("registos");

  let pessoa = new Pessoa(nome, peso, altura);
  let imc = pessoa.calcIMC();

  registo.innerHTML += `<p>Nome: ${nome} <br> Peso: ${peso} <br> Altura: ${altura} <br> IMC: ${imc.toFixed(
    2
  )}</p>`;
}
