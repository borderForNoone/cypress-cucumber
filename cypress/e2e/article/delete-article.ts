import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import articlePage from '../../pages/ArticlePage';
import createArticlePage from '../../pages/CreateArticlePage';
import registrationPage from '../../pages/RegistrationPage';
import { faker } from '@faker-js/faker';

const title = faker.lorem.sentence();
const description = faker.lorem.sentence();
const body = faker.lorem.paragraph();
const tagList = faker.lorem.words();

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am logged in', () => {
    registrationPage.visit();
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
});

Given('I have created an article', () => {
    homePage.clickNewArticle();
    createArticlePage.fillArticleForm(title, description, body, tagList);
    createArticlePage.submitArticleForm();
    articlePage.assertArticleTitle(title);
});

When('I click on "Delete Article"', () => {
    articlePage.clickDeleteArticleButton();
});

Then('I should no longer see the article', () => {
    homePage.assertArticleNotPresent(title);
});
