import { Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import AdvantageapiServices from '../services/AdvantageapiServices'

const advantageapiServices = new AdvantageapiServices()

Given ('I consult the product {string} and quantity per each category {string}', (name, quantityPerEachCategory) => {
    advantageapiServices.doGetRequestConsultCatalog(name, quantityPerEachCategory)
})

When ('the response code states should be {int}', (expectedStatusCode) => {
    advantageapiServices.validateStatusCode(expectedStatusCode)
})

Then ('the response body should contain value {string}', (expectedValue) => {
    advantageapiServices.validateResponse(expectedValue)
})
