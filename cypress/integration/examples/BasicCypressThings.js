/// <reference types="Cypress" />


describe("This is My First Test",function(){ //npx cypress open

    it("testCaseOne",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type("ca")
        cy.wait(2000)
        cy.get(".product").should('have.length',5) // this will have one invisible product
        cy.get(".product:visible").should('have.length',4)// Now we are using vsible to get only locators of isible elements

        cy.get(".products").as("collectionOfProductsLocator") // as means Alias which will be declared once and reused in many instances.

        cy.get('@collectionOfProductsLocator').find(".product").should('have.length',4) //we are shortning the scope to some length and checking in that

        cy.get('@collectionOfProductsLocator').find(".product").eq(2).contains("ADD TO CART").click()

        cy.get('@collectionOfProductsLocator').find(".product").each((e1,index,$list)=>{
                    console.log("value of index is  in console: "+index)
                    cy.log("value of index is : "+index)
            const productName = e1.find("h4.product-name").text()
            if(productName.includes("Cashews")){
                cy.wrap(e1).find("button").click()
                //cy.e1.find("button").click() 

            }
        }
        )
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
            
        })


    })
})