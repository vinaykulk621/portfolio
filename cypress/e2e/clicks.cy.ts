describe('making sure all the images are loaded in correctly', () => {
  beforeEach(() => {
    cy.visit('/clicks')
  })
  it('Clicks page has some pictures', () => {
    cy.contains(/clicks/i)
    cy.get('img').should('have.length', 16)
  })
})
