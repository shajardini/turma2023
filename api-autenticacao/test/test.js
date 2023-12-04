// Teste para o endpoint de busca de usuário
describe('/GET user', () => {
    it('Deve retornar as informações do usuário', (done) => {
      // Autenticar o usuário e obter o token JWT
      chai.request(app)
        .post('/signin')
        .send({ email: 'test@test.com', password: 'password123' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
  
          // Usar o token no teste /GET user
          const token = res.body.token;
  
          chai.request(app)
            .get('/user')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.have.property('email');
              done();
            });
        });
    });
  });
  