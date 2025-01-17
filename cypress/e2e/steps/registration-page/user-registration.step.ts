import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../../pages/HomePage';
import registrationPage from '../../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am on the registration page', () => {
  registrationPage.visit();
});

When('I fill in the registration form with valid details', () => {
  registrationPage.fillRegistrationForm(username, email, password);
});

When('I submit the registration form', () => {
  registrationPage.submitRegistrationForm();
});

Then('I should see my username in the top right corner', () => {
  homePage.assertContainsText(homePage.navLink, username);
});
