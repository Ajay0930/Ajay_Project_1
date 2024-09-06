

describe('API Testing', ()=>{

    it('Parsing the Query Parameter', ()=>{
        cy.request({

            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: { page: 2 }
        }).then((response)=>{
            expect(response.status).to.eq(200)  //Checked the status of the request
            expect(response.body.page).to.eq(2) //checked page number validation
            expect(response.body.data).have.length(6)
            expect(response.body.data[0]).have.property('id', 7)
            expect(response.body.data[0]).have.property('first_name', 'Michael')





        })





    })





})