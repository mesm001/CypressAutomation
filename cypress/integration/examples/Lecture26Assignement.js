/// <reference types="Cypress" />

describe("This is My First Test",function(){ //npx cypress open

    it("testCaseOne",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca") 
        cy.wait(2000)

        //cy.get(".products").find(".product").should('have.length',4) //we are shortning the scope to some length and checking in that

        cy.get(".products").find(".product").each(($el, index, $list)=>{
                cy.log("value of index"+index)
                const productName = $el.find("h4.product-name").text()
                
                if(productName.includes("Cashews")){
                    cy.wrap($el).find("button").click()
                }
                if(productName.includes("Carrot")){
                    cy.wrap($el).find("button").click()
                }

        })
        cy.get(".cart-icon > img").click()
        cy.get("[class='action-block'] ").contains("PROCEED TO CHECKOUT").click()
        cy.get("[style*='text-align:']").contains("Place Order").click()



    })
})