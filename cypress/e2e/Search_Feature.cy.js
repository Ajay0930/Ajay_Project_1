

describe('Search Feature test', ()=>{
    before(() =>{
        cy.visit('http://www.automationpractice.pl/')
        cy.login('malik.ajay1992@yahoo.com', 'Ajay@123')
        cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')
    
    })

    it('should able to search', ()=>{
        cy.search('Dress')
        cy.get('.lighter').should('contain.text', 'Dress')
        cy.get('#header_logo').click()
        cy.search('Male')
        cy.contains('No results were found').should('be.visible')
        cy.get('#header_logo').click()
        cy.search('T-shirt')
        cy.get('.availability').should('be.visible')


    })
   
});