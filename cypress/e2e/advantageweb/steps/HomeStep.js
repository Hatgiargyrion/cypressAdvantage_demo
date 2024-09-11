import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePo from '../pages/HomePO'
const homePO = new HomePo();


Given('I am on the website', () => {
    homePO.acessWebsite()
})

When('search product {string}', (product) => {
    homePO.searchProduct(product)
})
