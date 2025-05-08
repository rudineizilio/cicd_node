const express = require('express');
const calcularIMC = require('./imc');

const app = express();
app.use(express.json());

app.post('/imc', (req, res) => {
  const { peso, altura } = req.body;
  if (!peso || !altura) return res.status(400).send('Dados incompletos');
  const resultado = calcularIMC(peso, altura);
  res.json({ imc: resultado });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
