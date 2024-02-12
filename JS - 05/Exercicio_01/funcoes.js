function mudarTudo() {
  let botoes = document.getElementsByClassName("btn");
  let body = document.body;
  let div_css = document.getElementsByClassName("div_css");

  for (let i = 0; i < botoes.length; i++) {
    botoes[i].classList.toggle("especial");
  }

  body.classList.toggle("white");
}
