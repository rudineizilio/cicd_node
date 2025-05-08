const calcularIMC = require('../src/imc');

test('Calcula IMC corretamente', () => {
  const imc = calcularIMC(70, 1.75);
  expect(imc).toBe('22.86');
});
