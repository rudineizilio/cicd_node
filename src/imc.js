function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
  
  module.exports = calcularIMC;
  