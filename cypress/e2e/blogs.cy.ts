const allBlogNames = [
  'Database management a simple guide to chaos',
  'Data strucutres and Dojo',
  'Creating a ML model in pytorch 🔥.',
  'Learning Pytorch basics 🔥.',
  'Python 🐍.',
  'My startup ideas.',
  'Getting started with Three-js in Next-js 13',
  'My Go-To Tech Stack',
  'First Blog',
]

describe('Checking correctness of all blogs and all blogs page', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })
  it('blogs page has all blogs correctly', () => {
    allBlogNames.map((name) => {
      cy.contains(name)
    })
  })
  it('All Blogs are all loaded correctly', () => {
    allBlogNames.map((name) => {
      cy.contains(name).click().contains(new RegExp(name, 'i'))
    })
  })
})
