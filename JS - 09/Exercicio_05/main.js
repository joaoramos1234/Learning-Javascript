var total = document.getElementById("total").value;
var intervalo = document.getElementById("intervalo").value;

for (let i = 1; i <= total; i++) {
  setTimeout(enviar, i * intervalo);
}
