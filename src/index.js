const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});

app.get('/', (req, res) => {
  console.log('servidor on');
  res.send('ta on');
});
