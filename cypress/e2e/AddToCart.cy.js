


describe('Placing Order Flow', ()=>{                                                                                        //Created describe block

    it('To check the product is added into the cart', ()=>{                                                                      //Visit the Url
        cy.visit('https://automationexercise.com/')
        cy.contains("Signup / Login").should('be.visible').click()                                                                    //Checked for the login link and performs click action
        cy.get('input[data-qa="login-email"]').type('malik.ajay1992@yahoo.com');                                                                //Get the Element and entered the email
        cy.get('input[data-qa="login-password"]').type('Ajay@123')                                                                                      //Get the Password element and entered the password
        cy.get('[data-qa="login-button"]').click()                                                                                                          //Performed login button action
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').trigger('mousehover')                            //Trigger mousehove on the listed product and then perform the click action in the next line of code.
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()                                                 //Handled the success message pop up.
        cy.get('.modal-footer > .btn').click();
       
    })

});