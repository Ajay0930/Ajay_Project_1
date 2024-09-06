


describe('Login Feature Test', ()=>{

    beforeEach(() =>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.login('malik.ajay1992@yahoo.com', 'Ajay@123')
    })

    it('User should be logged in', () =>{
        cy.url().should('include', 'controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)
    })


    it('should navigate to homepage', () =>{
        cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')

    })

})