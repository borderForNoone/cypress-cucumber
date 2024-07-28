import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import { faker } from '@faker-js/faker';

const email = faker.internet.email();

Given('I am on the login page', () => {
    LoginPage.visit('/login');
});

When('I enter a valid email and a blank password', () => {
    LoginPage.typeIntoInput(LoginPage.emailInput, email);
});

When('I click on the login button', () => {
    LoginPage.submitLoginForm();
});

Then('I should see an error message {string}', (expectedMessage: string) => {
    LoginPage.assertErrorMessageVisible(expectedMessage);
});
