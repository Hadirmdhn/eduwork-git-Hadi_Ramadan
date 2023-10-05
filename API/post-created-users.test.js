describe('POST Created Users', () =>{

    it('Succesfully created new users', () => {
        var user = {
            "name" : "Hadi",
            "job" : "homeless"
        }
        cy.request('POST','https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.name).equal(user.name)
            expect(Response.body.job).equal(user.job)
        })
    })
})