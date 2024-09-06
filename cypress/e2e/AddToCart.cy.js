


describe('Placing Order Flow', ()=>{
    it('To check the product is added into the cart', ()=>{
        cy.visit('https://automationexercise.com/')
        cy.contains("Signup / Login").should('be.visible').click()
        cy.get('input[data-qa="login-email"]').type('malik.ajay1992@yahoo.com');
        cy.get('input[data-qa="login-password"]').type('Ajay@123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').trigger('mousehover')
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click();
       
    })

});