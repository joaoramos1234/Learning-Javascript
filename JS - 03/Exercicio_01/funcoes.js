let luz_acesa = false;

function toggleLuz() {
  let luz = document.getElementById("luz-desligada");
  let botao = document.getElementById("botao");
  let titulo = document.getElementById("titulo");
  let caixa = document.getElementById("caixa-1");
  let caixa2 = document.getElementById("caixa-2");
  /* let div_css = document.getElementsByClassName("div-css"); */
  let body = document.body;

  if (luz_acesa) {
    luz.src = "desligado.jpg";
    botao.innerHTML = "Ligar Luz";
    body.style.backgroundColor = "";
    titulo.style.color = "";
    caixa.style.border = "2px solid white";
    caixa2.style.border = "2px solid white";
    luz_acesa = false;
  } else {
    luz.src = "ligado.jpg";
    botao.innerHTML = "Desligar Luz";
    body.style.backgroundColor = "lightyellow";
    titulo.style.color = "black";
    caixa.style.border = "2px solid black";
    caixa2.style.border = "2px solid black";
    luz_acesa = true;
  }
}
