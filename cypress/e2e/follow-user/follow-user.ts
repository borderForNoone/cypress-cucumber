import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import profilePage from '../../pages/ProfilePage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();
const otherUser = 'jake'; 

Given('I am logged in', () => {
    registrationPage.visit('/register');
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
});

Given('I am viewing another user\'s profile', () => {
    profilePage.visit(`/profile/${otherUser}`);
});

When('I click the "Follow" button', () => {
    profilePage.clickFollowButton();
});

Then('I should see the "Unfollow" button', () => {
    profilePage.assertUnfollowButtonVisible();
});
