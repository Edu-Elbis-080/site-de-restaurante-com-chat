const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// serve arquivos da pasta public
app.use(express.static(path.join(__dirname, 'sotaque-na-cozinha')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sotaque-na-cozinha', 'home.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

