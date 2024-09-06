

describe('API Testing', ()=>{                                                                  //Created a describe block

    it('Parsing the Query Parameter in GET request', ()=>{                                     //This is the it block and inside this I use cy.request method to validate the status and other property of the user.
        cy.request({

            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: { page: 2 }

        }).then((response)=>{
            expect(response.status).to.eq(200)                                          //Checked the status of the request
            expect(response.body.page).to.eq(2)                                          //checked page number validation
            expect(response.body.data).have.length(6)                                     //checked the records counts in the response data
            expect(response.body.data[0]).have.property('id', 7)                           //Validated the id of the user
            expect(response.body.data[0]).have.property('first_name', 'Michael')            //Validated the name of the user
        })

    })

})