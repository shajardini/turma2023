const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const authController = {
  async signup(req, res) {
    try {
      const { nome, email, senha, telefones } = req.body;
      const hashedPassword = await bcrypt.hash(senha, 10);

      await userModel.createUser(nome, email, hashedPassword, telefones);

      return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  async signin(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await userModel.getUserByEmail(email);

      if (!user) {
        return res.status(401).json({ error: 'Usuário e/ou senha inválidos' });
      }

      const passwordMatch = await bcrypt.compare(senha, user.senha);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Usuário e/ou senha inválidos' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'seu_segredo', { expiresIn: '1h' });

      await userModel.updateLastLogin(user.id);

      const response = {
        id: user.id,
        data_criacao: user.data_criacao,
        data_atualizacao: user.data_atualizacao,
        ultimo_login: new Date(),
        token,
      };

      return res.status(200).json(response);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
};

module.exports = authController;
