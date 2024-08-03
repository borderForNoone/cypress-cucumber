import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../../pages/HomePage';
import articlePage from '../../../pages/ArticlePage';
import createArticlePage from '../../../pages/CreateArticlePage';
import { faker } from '@faker-js/faker';

const title = faker.lorem.sentence();
const description = faker.lorem.sentence();
const body = faker.lorem.paragraph();
const tagList = faker.lorem.words();

const comment = faker.lorem.sentence();

Given('I am viewing an article', () => {
    homePage.clickNewArticle();
    createArticlePage.fillArticleForm(title, description, body, tagList);
    createArticlePage.submitArticleForm();
    articlePage.assertArticleTitle(title);
});

When('I add a comment', () => {
    articlePage.addComment(comment);
});

When('I submit the comment', () => {
    articlePage.submitComment();
});

Then('I should see my comment', () => {
    articlePage.assertCommentVisible(comment);
});
