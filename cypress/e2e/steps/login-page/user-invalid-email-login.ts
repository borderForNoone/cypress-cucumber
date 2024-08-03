import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../../pages/LoginPage';
import { faker } from '@faker-js/faker';

const password = faker.internet.password();

Given('I am on the login page', () => {
    loginPage.visit('/login');
});

When('I enter a blank email and a valid password', () => {
    loginPage.typeIntoInput(loginPage.passwordInput, password);
});

When('I click on the login button', () => {
    loginPage.submitLoginForm();
});

Then('I should see an error message {string}', (expectedMessage: string) => {
    loginPage.assertErrorMessageVisible(expectedMessage);
});
