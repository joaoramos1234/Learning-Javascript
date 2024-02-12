var celsius = 15;

function calcularKelvin(celsius) {
  let kelvin = celsius + 273.15;
  return `C para K: ${kelvin.toFixed(2)}`;
}

function calcularFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return `C para F: ${fahrenheit.toFixed(2)}`;
}
