const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de Autenticação' });
});

const users = []; // Simulação de armazenamento temporário

// Endpoint de cadastro (Sign Up)
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Verifica se o e-mail já está cadastrado
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ mensagem: 'E-mail já existente' });
  }

  // Cria um novo usuário e armazena temporariamente (simulação)
  const newUser = { email, password };
  users.push(newUser);

  res.json({ mensagem: 'Cadastro realizado com sucesso' });
});

// Endpoint de autenticação (Sign In)
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Procura o usuário no armazenamento (simulação)
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
  }

  // Gera um token JWT
  const token = jwt.sign({ email }, 'segredo', { expiresIn: '30m' });

  res.json({ token });
});

// Endpoint de busca de usuário
app.get('/user', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ mensagem: 'Não autorizado' });
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'segredo');
    const user = users.find(user => user.email === decoded.email);

    if (!user) {
      return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    res.json({ email: user.email });
  } catch (error) {
    return res.status(401).json({ mensagem: 'Sessão inválida' });
  }
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app