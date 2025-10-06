import { Given, When } from "@badeball/cypress-cucumber-preprocessor"

const url = "https://webdriveruniversity.com/"


Given('I navigate to the WebdriverUniveristy homepage', () => {
    cy.visit(url)
})

When('I click on the Contact Us button', () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})