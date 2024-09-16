import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import BaseServices from '../services/BaseServices'

const baseServices = new BaseServices();

When ('the response code states should be {int}', (expectedStatusCode) => {
    baseServices.validateStatusCode(expectedStatusCode);
})
