function calcularGraus() {
  let input_graus = document.getElementById("graus");
  let saida = document.getElementById("saida");

  if (input_graus.value != "") {
    let graus = parseInt(input_graus.value);
    let fahrenheit = (graus * 9) / 5 + 32;
    let kelvin = graus + 273.15;

    saida.innerHTML = `${graus}°C equivalem a ${fahrenheit}°F e ${kelvin}ºK`;
  } else {
    saida.innerHTML = "";
  }
}
