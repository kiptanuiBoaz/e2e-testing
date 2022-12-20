// const { beforeEach } = require("node:test")        

describe('home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('the h1 contains the correct term', () => {
    
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it("if the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  });
})