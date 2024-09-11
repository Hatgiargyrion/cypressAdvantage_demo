import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import SearchPO from '../pages/SearchPO'
const searchPO = new SearchPO();

When('I select the product', () => {
    searchPO.selectProduct()
})

When('validate product on screen', () => {
    searchPO.validateSearch()
})