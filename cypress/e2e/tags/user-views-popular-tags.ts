import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am logged in', () => {
    registrationPage.visit('/register');
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
});

When('I click on a random popular tag', () => {
    homePage.clickRandomPopularTag();
});

Then('I should see articles with the clicked tag', () => {
    homePage.assertArticlesWithRandomPopularTagVisible();
});
