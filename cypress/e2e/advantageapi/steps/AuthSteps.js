import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import AuthServices from '../services/AuthServices'

const authServices = new AuthServices();

Given('that I log in with the user', () => {
    authServices.doPostRequestToLoginUser();
})

Then('I validate the success message in the response {string}', (message) => {
    authServices.validateMessageSucess(message)
})