describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update the display to the running total',() => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })
  it('should update the display with the result of arithmentical operations',() => {
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })
  it('should output as expected for positive numbers',() => {
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })
  it('should output as expected for negative numbers',() => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })
  it('should output as expected for decimal numbers',() => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6.5')
  })
  it('should output as expected for very large numbers',() => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20999')
  })
  it('should not be able to be divided by 0', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERR')
  })
})

// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// E.g. does 2 + 2 - update the display to 4
// Can multiple operations be chained together?
// E.g. does 3 + 1 - 2 == 2
// Is the output as expected for positive numbers
// Is the output as expected for negative numbers
// Is the output as expected for decimal numbers
// Is the output as expected for very large numbers


// it ("Should be able to add a comment",()=> {
//   const nameInput = cy.get("#name-input")
//   nameInput.type("Biggus Biggins")
//   cy.get("#comment-input").type("Do you remember, nananananana, this is a test, nananananana awaaay ah ahaa aaayaaa say won't you remember")
//   cy.get("#comment-form").submit()
//   const commentListItems = cy.get("#comment-list > Li")
//   commentListItems.should("have.length",3)
// })