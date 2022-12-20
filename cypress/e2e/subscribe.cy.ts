describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("allows users to subscribe to the email list", () => {
      cy.getByData("email-input").type("tom@aol.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })
  })

  context("courses section", () => {
    it("has the correct courses section",()=>{
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
      
    })
  })

})
