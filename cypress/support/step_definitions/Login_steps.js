import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

let stub;

When ('I type in a user name {string} and a password {string}', (userName, password) => {
        cy.get('#text').type(userName); 
        cy.get('#password').type(password); 
})

Then ('I click on the Login button', () => {
     stub = cy.stub(); 
     cy.on('window:alert', stub); 
     cy.get('#login-button').click()
})

When ('I validate the alert box which contains text {string}', (expectedAlertText) => {
        expect(stub).to.have.been.calledWith(expectedAlertText); 
})
