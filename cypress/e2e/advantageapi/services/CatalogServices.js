const consultCatalog = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search';

let paramsConsultCatalog = {
    name: '',
    quantityPerEachCategory: ''
};

let responseContext = {};
let expectedCategoryName;

class CatalogServices {

    doGetRequestConsultCatalog(name, quantityPerEachCategory) {
        paramsConsultCatalog.name = name
        paramsConsultCatalog.quantityPerEachCategory = quantityPerEachCategory

        cy.api({
            method: 'GET',
            url: consultCatalog,
            qs: paramsConsultCatalog
        }).then((response) => {
            responseContext.response = response;
        });
    }

    validateStatusCode(expectedStatusCode) {
        expect(responseContext.response.status).to.eq(expectedStatusCode);
    }

    validateResponse(expectedCategoryName) {
        cy.wrap(responseContext.response.body[0])
            .should('have.property', 'categoryName', expectedCategoryName);

    }
}
export default CatalogServices