import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import OrderPaymentPO from "../pages/OrderPaymentPO";
const orderPaymentPO = new OrderPaymentPO();

Then('validate the product is selected in the shopping cart is equal of order payment', () => {
    orderPaymentPO.validateSelectedProductIntoOrderPayment()
})

