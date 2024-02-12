function registar(event) {
  event.preventDefault();

  let nome = document.getElementById("nome");
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");
  let saida = document.getElementById("saida");

  nomes.push(nome.value);
  pesos.push(peso.value);
  alturas.push(altura.value);

  let imc = peso.value / (altura.value * altura.value);

  saida.innerHTML += `<p>${nomes[nomes.length - 1]} 
  - ${pesos[pesos.length - 1]} 
  - ${alturas[alturas.length - 1]} 
  - (${imc.toFixed(2)})</p>`;

  nome.value = "";
  peso.value = "";
  altura.value = "";

  nome.focus();

  console.log(nomes);
  console.log(pesos);
  console.log(alturas);
}
