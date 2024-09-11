import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import ShoppingCartPO from "../pages/ShoppingCartPO";
const shoppingCartPO = new ShoppingCartPO();

Then('validate that the product in the cart', () => {
    shoppingCartPO.validateSelectedProductIntoCart()
})

Then('I go to order payment', () => {
    shoppingCartPO.goToOrderPayment()
})