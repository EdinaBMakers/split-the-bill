describe('Bill Splitter', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('can be loaded', () => {
    cy.get('#title').should('have.html', 'TIP CALCULATOR');
  });

  it('does not show error by default', () => {
    cy.get('#error').should('have.html', '');
  });

  it('does not show split bill by default', () => {
    cy.get('#billPerPerson').should('have.html', '');
  });
  
  it('shows error when calculating bill without filling in any field', () => {
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill without bill amount', () => {
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill without bill amount', () => {
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with bill amount as text', () => {
    cy.get('#billAmount').type('twenty');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with negative bill amount', () => {
    cy.get('#billAmount').type('-20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount must be greater than zero');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill without number of people', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Number of people is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with number of people as text', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('two');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Number of people is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with zero number of people', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('0');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Number of people must be 1 or more');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('shows error when calculating bill with negative number of people', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('-1');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Number of people must be 1 or more');
    cy.get('#billPerPerson').should('have.html', '');
  });

  it('does not tip if tip is not selected', () => {
    cy.get('#billAmount').type('20');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £10/person');
  });

  it('can tip and split bill', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £13/person');
  });

  it('can recover from invalid state', () => {
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');

    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £13/person');
  });

  it('can invalidate after successful calculation', () => {
    cy.get('#billAmount').type('20');
    cy.get('#serviceQuality').select('30');
    cy.get('#numOfPeople').type('2');
    cy.get('#calculate').click();

    cy.get('#error').should('have.html', '');
    cy.get('#billPerPerson').should('have.html', 'Bill amount: £13/person');

    cy.get('#billAmount').clear();
    cy.get('#calculate').click();
    
    cy.get('#error').should('have.html', 'Bill amount is not a number');
    cy.get('#billPerPerson').should('have.html', '');
  });
});