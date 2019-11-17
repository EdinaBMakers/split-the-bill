describe('Bill Splitter', () => {
  it('can be loaded', () => {
    cy.visit('/index.html');

    cy.get('#title').should('have.html', 'TIP CALCULATOR');
  });

  it('does not show error by default', () => {
    cy.visit('/index.html');

    cy.get('#error').should('have.html', '');
  });

  it('does not show split bill by default', () => {
    cy.visit('/index.html');

    cy.get('#billPerPerson').should('have.html', '');
  });
});