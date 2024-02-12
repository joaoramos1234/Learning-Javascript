function acionar() {
  let menu_principal = document.getElementsByClassName("menu_principal");
  let btn = document.getElementsByClassName("btn");

  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.add("especial");
    btn[i].innerHTML = `Novo-teste ${i}`;
  }

  menu_principal[0].classList.add("hidden");
}

function voltar() {
  let menu_principal = document.getElementsByClassName("menu_principal");
  let btn = document.getElementsByClassName("btn");

  if (btn[0].classList.contains("especial")) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("hidden");
      btn[i].classList.remove("especial");
      btn[i].innerHTML = `Botão ${i}`;
    }

    menu_principal[0].classList.remove("hidden");
    btn[0].innerHTML = "Acionar";
  }
}
