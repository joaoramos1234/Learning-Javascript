let num = 0;

function adicionarP() {
  let p = document.getElementById("p-show");
  num++;
  p.innerHTML += `Sou um parágrafo! ${num} <br><br>`;
}

function removerP() {
  let p = document.getElementById("p-show");
  p.innerHTML = "";
  num = 0;
}
