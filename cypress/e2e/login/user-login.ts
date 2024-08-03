import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/LoginPage';
import homePage from '../../pages/HomePage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am on the login page', () => {
  loginPage.visit('/login');
});

When('I have an account', () => {
  registrationPage.visit();
  registrationPage.fillRegistrationForm(username, email, password);
  registrationPage.submitRegistrationForm();
  homePage.assertContainsText(homePage.navLink, username);
  loginPage.visit('/login');
});

When('I enter valid credentials', () => {
  loginPage.fillLoginForm(email, password);
});

When('I submit the login form', () => {
  loginPage.submitLoginForm();
});

Then('I should be redirected to the homepage', () => {
  homePage.assertUsernameInTopRight(username);
});