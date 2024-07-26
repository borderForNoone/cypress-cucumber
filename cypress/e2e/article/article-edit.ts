import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';
import createArticlePage from '../../pages/CreateArticlePage';
import registrationPage from '../../pages/RegistrationPage';
import articlePage from '../../pages/ArticlePage';
import { faker } from '@faker-js/faker';

const title = faker.lorem.sentence();
const description = faker.lorem.sentence();
const body = faker.lorem.paragraph();
const tagList = faker.lorem.words();

const newTitle = faker.lorem.sentence();
const newDescription = faker.lorem.sentence();
const newBody = faker.lorem.paragraph();
const newTagList = faker.lorem.words();

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I have an article', () => {
    registrationPage.visit('/register');
    registrationPage.fillRegistrationForm(username, email, password);
    registrationPage.submitRegistrationForm();
    homePage.assertUsernameInTopRight(username);
    
    homePage.clickNewArticle();
    createArticlePage.fillArticleForm(title, description, body, tagList);
    createArticlePage.submitArticleForm();
    
});

When('I edit the article', () => {
    articlePage.clickEditArticle();
    createArticlePage.fillArticleForm(newTitle, newDescription, newBody, newTagList);
    createArticlePage.submitArticleForm();
});

Then('I should see the updated article', () => {
    articlePage.getArticleTitle().should('eq', newTitle);
});
