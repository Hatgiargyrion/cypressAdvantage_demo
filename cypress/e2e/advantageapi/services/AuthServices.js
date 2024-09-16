const loginUser = 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login';

class AuthServices {

    doPostRequestToLoginUser() {
        cy.fixture('body/authBody.json').then((body) => {
            cy.api({
                method: 'POST',
                url: loginUser,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    Cypress.env('apiResponse', response);
                    Cypress.env('authToken', response.body.statusMessage.token);
                });
        });
    }


    validateMessageSucess(message) {
        const response = Cypress.env('apiResponse');
        expect(response.body.statusMessage.reason).to.eq(message);
    }
}


export default AuthServices