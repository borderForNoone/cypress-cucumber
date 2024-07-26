import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import { faker } from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.internet.password();

Given('I am on the login page', () => {
    LoginPage.visit('/login');
});

When('I enter invalid username and password', () => {
    LoginPage.fillLoginForm(email, password);
});

When('I click on the login button', () => {
    LoginPage.submitLoginForm();
});

Then('I should see an error message {string}', (expectedMessage: string) => {
    LoginPage.assertErrorMessageVisible(expectedMessage);
});
