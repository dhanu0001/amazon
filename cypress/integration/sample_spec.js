describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to www.amazon.com').click();
  })
})
