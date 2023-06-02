describe('Register Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('User should register successfully', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Sara');
    cy.getByData('email-input').type('sara@email.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });
});
