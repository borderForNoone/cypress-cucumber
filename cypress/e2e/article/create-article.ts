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
    registrationPage.visit('/register');
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
});

When('I click on "New Article"', () => {
    homePage.clickNewArticle();
});

When('I fill in the article form', () => {
    createArticlePage.fillArticleForm(title, description, body, tagList);
});

When('I submit the form', () => {
    createArticlePage.submitArticleForm();
});

Then('I should see the article page', () => {
    articlePage.assertArticleTitle(title);
});