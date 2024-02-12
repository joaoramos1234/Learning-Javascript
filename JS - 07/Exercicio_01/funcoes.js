var limite = 10;

function teclar(celsius) {
  let ecra = document.getElementById("temperatureValue");

  if (ecra.innerText.length < limite) {
    if (celsius == ".") {
      if (ecra.innerText === "-" || ecra.innerText === "") {
        ecra.innerText += "0" + celsius;
      } else if (!ecra.innerText.includes(".")) {
        ecra.innerText += celsius;
      }
    } else if (celsius == "-") {
      if (!ecra.innerText.includes("-") && ecra.innerText.length == 0) {
        ecra.innerText += celsius;
      }
    } else {
      ecra.innerText += celsius;
    }
  }

  calcular();
}

function limpar() {
  let ecra = document.getElementById("temperatureValue");
  let saida = document.getElementById("saida");

  ecra.innerText = "";
  saida.innerHTML = "";
}

function calcular() {
  let saida = document.getElementById("saida");
  let ecra = document.getElementById("temperatureValue");

  let celsius = parseFloat(ecra.innerText);
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * (9 / 5) + 32;

  if (!isNaN(celsius)) {
    saida.innerHTML = `${celsius} ºC = ${kelvin.toFixed(
      2
    )}ºK<br><br>${celsius} ºC = ${fahrenheit.toFixed(2)}ºF`;
  } else {
    saida.innerHTML = "";
  }
}
