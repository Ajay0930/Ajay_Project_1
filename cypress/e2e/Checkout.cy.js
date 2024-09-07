

describe('Test Checkout Out process', ()=>{


    it('Place an order', ()=>{
        cy.visit('https://automationexercise.com/')
        cy.contains("Signup / Login").should('be.visible').click()
        cy.get('input[data-qa="login-email"]').type('malik.ajay1992@yahoo.com');
        cy.get('input[data-qa="login-password"]').type('Ajay@123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click();
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type('Test Card')
        cy.get('[data-qa="card-number"]').type(4701322211111234)
        cy.get('[data-qa="cvc"]').type(837)
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2026)
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] > b').should('be.visible')
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')
        cy.get('[data-qa="continue-button"]').click()

    })
    
        
})