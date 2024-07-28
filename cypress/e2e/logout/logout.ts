import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import settingsPage from '../../pages/SettingsPage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am logged in', () => {
    registrationPage.visit('/register');
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertContainsText('.navbar .nav-link', username);
});

When('I navigate to the settings page', () => {
    homePage.clickSettings();
});

When('I click the logout button', () => {
    settingsPage.clickLogout();
});

Then('I should be redirected to the home page', () => {
    homePage.assertHomePageLoaded();
});
