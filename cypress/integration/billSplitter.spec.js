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
  
  it('shows error when calculating bill without filling in any field', () => {
    cy.visit('/index.html');
    cy.get('#calculate').click();


    cy.get('#error').should('have.html', 'Bill amount must be greater than zero');
    cy.get('#billPerPerson').should('have.html', '');
  });
});