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

When ('I type a specific first name {string}', (firstName) => {
    cy.get('[name="first_name"]').type(firstName); 
    
})

When ('I type a specific Last name {string}', (lastName) => {
    cy.get('[name="last_name"]').type(lastName); 
    
})

When ('I type a specific Email Address {string}', (emailAddress) => {
  cy.get('[name="email"]').type(emailAddress); 
})

When ('I type a specific word {string} and number {int} within the commment input field', (word, number) => {
    cy.get('textarea[name="message"]').type(word, number) 
})
    

When ('I type in a first name {string} and a last name {string}', (firstName, lastName) => {
        cy.get('[name="first_name"]').type(firstName); 
        cy.get('[name="last_name"]').type(lastName); 

})

When ('I type an email address {string} and a comment {string}', (emailAddress, comment) => {
  cy.get('[name="email"]').type(emailAddress); 
    cy.get('textarea[name="message"]').type(comment); 
})

When ('I should be presented with header text {string}', (message) => {
        cy.xpath("//h1 | //body").contains(message)


})








