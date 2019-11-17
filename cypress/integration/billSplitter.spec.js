describe('Bill Splitter', function() {
  it('can be loaded', function() {
    cy.visit('/index.html');

    cy.get('#title').should('have.html', 'TIP CALCULATOR');
  });

  it('does not show error by default', function() {
    cy.visit('/index.html');

    cy.get('#error').should('have.html', '');
  });
});