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

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill without bill amount', () => {
    cy.visit('/index.html');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill without bill amount', () => {
    cy.visit('/index.html');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with text bill amount', () => {
    cy.visit('/index.html');
    cy.get('#billAmount').type('twenty');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with negative bill amount', () => {
    cy.visit('/index.html');
    cy.get('#billAmount').type('-20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount must be greater than zero');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('does not tip if tip is not selected', () => {
    cy.visit('/index.html');
    cy.get('#billAmount').type('20');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £10/person');
  });

  it('tips when tip is selected', () => {
    cy.visit('/index.html');
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £13/person');
  });
});