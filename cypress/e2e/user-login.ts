import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage();
const homePage = new HomePage();
const registrationPage = new RegistrationPage();

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am on the login page', () => {
  loginPage.visit('/login');
});

When('I have an account', () => {
  registrationPage.visit('/register');
  registrationPage.fillRegistrationForm(username, email, password);
  registrationPage.submitRegistrationForm();
  homePage.assertContainsText('.navbar .nav-link', username);
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
