import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import articlePage from '../../pages/ArticlePage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

let initialLikeCount: number;

Given('the user is logged in', () => {
    registrationPage.visit();
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
});

When('the user navigates to the "Global Feed" page', () => {
    homePage.clickGlobalFeed();
});

When('the user clicks on the first article', () => {
    homePage.clickFirstArticle();
});

When('the user clicks the "Like" button on the article', () => {
    articlePage.waitForPageToLoad();
    articlePage.getInitialLikeCount().then((count) => {
        initialLikeCount = parseInt(count.replace(/[^0-9]/g, ''), 10);
    });
    articlePage.clickLikeButton();
});

Then('the number of likes on the article should increase by one', () => {
    articlePage.getInitialLikeCount().then((count) => {
        const updatedLikeCount = parseInt(count.replace(/[^0-9]/g, ''), 10);
        expect(updatedLikeCount).to.be.greaterThan(initialLikeCount);
    });
});
