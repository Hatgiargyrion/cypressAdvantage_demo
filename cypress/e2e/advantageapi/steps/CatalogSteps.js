import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import CatalogServices from '../services/CatalogServices'

const catalogServices = new CatalogServices()

Given ('I consult the product {string} and quantity per each category {string}', (name, quantityPerEachCategory) => {
    catalogServices.doGetRequestConsultCatalog(name, quantityPerEachCategory)
})

Then ('the response body should contain value {string}', (expectedValue) => {
    catalogServices.validateResponse(expectedValue)
})

When ('I use the parameters of {string}', (params) => {
    catalogServices.getParamsFixturesParams(params)
})

When ('I upload new image', () => {
    catalogServices.doPostRequestUploadNewImage()
})

Then ('I verify that the product was updated successfully', () => {
    
    catalogServices.validateUploadNewImage()
})

Given ('I consult the product by id {int}', (id) => {
    catalogServices.doGetRequestConsultProductById(id)
})

Then ('the response body must contain the id of the product queried', () => {
    catalogServices.validateProductId()
})