import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import ProductPO from "../pages/ProductPO";
const productPO = new ProductPO();


When('I add the product to cart', () => {
    productPO.addToCart()
})

When('I go to shopping cart', () => {
    productPO.goToShoppingCart()
})