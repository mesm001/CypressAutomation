/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("This is related to Iframe",function(){
    it("1st Test in ",function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', "option1")

        


    })


})