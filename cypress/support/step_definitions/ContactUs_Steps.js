import { Then, When } from "@badeball/cypress-cucumber-preprocessor"


When ('I type in a fist name', () => {
        cy.get('[name="first_name"]').type("Dave"); 
})

When ('I type in a last name', () => {
    cy.get('[name="last_name"]').type("Smith"); 
})

When ('I type in a valid email address', () => {
    cy.get('[name="email"]').type("davesmith123@mail.com"); 
})

When ('I click on add a comment', () => {
    cy.get('textarea[name="message"]').type("Random Message") 
})

When ('I click on the submit button', () => {
    cy.get('[type="submit"]').click() 
})

Then('I should be presented with a successful contact us submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!'); 
    
})

Then ('I should be presented with an usuccessful contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address'); 
    
})
