class BaseServices {

    validateStatusCode(expectedStatusCode) {
        const response = Cypress.env('apiResponse');
        expect(response.status).to.eq(expectedStatusCode);
    }
}

export default BaseServices