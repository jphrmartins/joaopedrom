function calcularIMC() {
  var peso = parseFloat(document.querySelector('#peso').value);
  var altura = parseFloat(document.querySelector('#altura').value);
  var imc = (peso / Math.pow(altura,2));
  imc = imc * 100;
  imc = Math.round(imc);
  imc = imc/100;
  console.log("IMC: " + imc);
}
