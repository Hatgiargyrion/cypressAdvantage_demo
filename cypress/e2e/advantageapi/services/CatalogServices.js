import 'cypress-file-upload';

const consultCatalog = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search';
const uploadNewImage = 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/';
const consultProductById = 'https://www.advantageonlineshopping.com/catalog/api/v1/products/';

const product = {};

let paramsConsultCatalog = {
    name: '',
    quantityPerEachCategory: ''
};

let paramsUploadNewImage = {};

class CatalogServices {

    doGetRequestConsultCatalog(name, quantityPerEachCategory) {
        paramsConsultCatalog.name = name
        paramsConsultCatalog.quantityPerEachCategory = quantityPerEachCategory

        cy.api({
            method: 'GET',
            url: consultCatalog,
            qs: paramsConsultCatalog
        }).then((response) => {
            Cypress.env('apiResponse', response);
        });
    }

    validateResponse(expectedCategoryName) {
        const response = Cypress.env('apiResponse');
        cy.wrap(response.body[0])
            .should('have.property', 'categoryName', expectedCategoryName);
    }

    getParamsFixturesParams(params) {
        cy.fixture('params/' + params).then((body) => {
            paramsUploadNewImage = body;
        });
    }

    doPostRequestUploadNewImage() {
        const token = Cypress.env('authToken');

        cy.fixture('images/inmetrics_logo.jpg', 'binary').then((fileContent) => {
            const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
            let formData = new FormData();
            formData.append('file', blob, 'image.jpg');

            cy.api({
                method: 'POST',
                url: uploadNewImage+paramsUploadNewImage.userId+'/'+paramsUploadNewImage.source+'/'+paramsUploadNewImage.color+'?product_id='+paramsUploadNewImage.product_id,
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token
                },
                body: formData,
            }).then((response) => {
                expect(response.status).to.eq(200)

                const arrayBuffer = response.body;
                const decoder = new TextDecoder('utf-8');
                const text = decoder.decode(arrayBuffer);

                let jsonData;
                try {
                    jsonData = JSON.parse(text);
                    Cypress.env('imageId', jsonData.imageId);
                } catch (e) {
                    cy.log(`Failed to parse JSON: ${e.message}`);
                    cy.log(`Response Text: ${text}`);
                    throw e;
                }
            });
        });
    }

    validateUploadNewImage() {
        const response = Cypress.env('apiResponse')
        const imageId = Cypress.env('imageId')
        expect(paramsUploadNewImage.color+'##'+response.body.images).to.include(imageId)
    }

    doGetRequestConsultProductById(id) {
        product.id = id

        cy.api({
            method: 'GET',
            url: consultProductById + id,
        }).then((response) => {
            expect(response.status).to.eq(200)
            Cypress.env('apiResponse', response);
        });
    }

    validateProductId() {
        const product_id = Cypress.env('apiResponse');
        expect(product_id.body.productId).to.eq(product.id)
    }
}
export default CatalogServices