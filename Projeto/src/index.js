const express = require('express');
const bodyParser = require('body-parser');
const { queryAsync } = require('./db/db'); // Certifique-se de ter uma estrutura adequada para seu arquivo de conexão com o banco de dados
const authController = require('./controllers/authController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota de cadastro
app.post('/signup', authController.signup);

// Rota de login
app.post('/signin', authController.signin);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
