import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import CatalogServices from '../services/CatalogServices'

const catalogServices = new CatalogServices()

Given ('I consult the product {string} and quantity per each category {string}', (name, quantityPerEachCategory) => {
    catalogServices.doGetRequestConsultCatalog(name, quantityPerEachCategory)
})

When ('the response code states should be {int}', (expectedStatusCode) => {
    catalogServices.validateStatusCode(expectedStatusCode)
})

Then ('the response body should contain value {string}', (expectedValue) => {
    catalogServices.validateResponse(expectedValue)
})
