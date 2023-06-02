describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should not permit an invalid email', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O email digitado é inválido');
  });
  it.only('The input should not be empty', () => {
    cy.getByData('botao-login').click();

    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo email é obrigatório');
  });
});
