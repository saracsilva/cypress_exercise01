describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Renders h1 with the right text', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
