


describe('Login Feature Test', ()=>{

    //used beforeEach method to visit the application and login with the valid creds. Created custom command for login function

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



//Another method to login using fixtures file test data:

describe('Automation Test Suite - Fixtures', ()=> {

    //Use the cy.fixture() method to pull data from fixture file
    before( function () {
      cy.fixture('TestData').then(function (data) {
        this.data = data;
      })
    })
  
    it('Verify login using fixture folder test data', function () {
  
      //Provide the data read from the fixture
      cy.visit('http://www.automationpractice.pl/index.php');
      cy.get('.header_user_info').click()
      cy.get('#email').type(this.data.Email);
      cy.get('#passwd').type(this.data.Password)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      cy.get('#SubmitLogin').should('not.be.disabled');
      cy.wait(300)
  
  
      //Checking whether the Registration is successful and whether the user has the control of my account
      cy.url().should('include', 'controller=authentication&back=my-account');
    })
  })