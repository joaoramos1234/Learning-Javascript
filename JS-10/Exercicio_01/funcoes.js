function toggleModal() {
  let abir_modal = document.getElementById("abrir_modal");
  let fechar_modal = document.getElementById("fechar_modal");
  let divCss = document.querySelector(".div-css");

  document.body.style = "";

  abir_modal.addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 1)";
    document.querySelector(".div-css").style.opacity = 0.3;
  });

  fechar_modal.addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    document.body.style.backgroundColor = "";
    document.querySelector(".div-css").style.opacity = 1;
  });
}
