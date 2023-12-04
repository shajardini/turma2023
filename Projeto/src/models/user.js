const { queryAsync } = require('../db/db');

class UserModel {
  async createUser(nome, email, hashedPassword, telefones) {
    const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
    const existingUser = await queryAsync(checkEmailQuery, [email]);

    if (existingUser.length > 0) {
      throw new Error('E-mail já em uso');
    }

    const insertUserQuery = 'INSERT INTO usuarios (nome, email, senha, telefones) VALUES (?, ?, ?, ?)';
    await queryAsync(insertUserQuery, [nome, email, hashedPassword, JSON.stringify(telefones)]);
  }

  async getUserByEmail(email) {
    const getUserQuery = 'SELECT * FROM usuarios WHERE email = ?';
    const user = await queryAsync(getUserQuery, [email]);
    return user[0] || null;
  }

  async updateLastLogin(userId) {
    const updateLastLoginQuery = 'UPDATE usuarios SET ultimo_login = CURRENT_TIMESTAMP WHERE id = ?';
    await queryAsync(updateLastLoginQuery, [userId]);
  }
}

module.exports = new UserModel();
