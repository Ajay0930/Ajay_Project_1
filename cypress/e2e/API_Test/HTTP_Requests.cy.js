/// <reference types = "Cypress" />


describe('Get API user Test', () =>{

    it('Get User Call', () =>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    })


    it('Post Call Create a User', ()=>{
        cy.request({
            method : 'POST',
            url : 'https://jsonplaceholder.typicode.com/posts',
            body : {
                "name":"Ajay Malik",
                "gender": "Male",
                "email id": "abc@gmail.com"
            }

        }).its('status')
        .should('equal', 201)
    })


    it('PUT Call to update an user', ()=>{
        cy.request({
            method: "PUT",
            url : "https://jsonplaceholder.typicode.com/posts/1",
            body: {

                "name":"Ajay Malik",
                "gender": "Male",
                "email id": "abc@gmail.com",
                "id" : "1"
            }

        }).its('status')
        .should('equal', 200)

    })

    it('Delete a user', ()=>{
        cy.request({

            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/posts/1"

        }).its('status')
        .should('equal', 200)

    })

})