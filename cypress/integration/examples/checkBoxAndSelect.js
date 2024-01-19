/// <reference types="Cypress" />

describe("This is My Seocn Test",function(){ //npx cypress open

    it("testCaseTwo",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Checking checkbox
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', "option1")
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked').and('have.value', "option1")
        cy.get("input[type='checkbox']").check(['option2','option3'])

        //Selecting static Dropdown
        cy.get("#dropdown-class-example").select('Option1').should('have.value',"option1")
        

        //Selecting Dynamic Dropdown
        cy.get("[id='autocomplete']").type("Ind").should('have.value',"Ind")
        cy.get("[class='ui-menu-item'] div").each((dynamicDropDownElements,index,List)=>{
            if(dynamicDropDownElements.text()==="India"){
                cy.wrap(dynamicDropDownElements).click()
            }
        })

    })
})