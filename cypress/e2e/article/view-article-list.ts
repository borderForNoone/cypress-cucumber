import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    homePage.visit('/');
});

When('I scroll down', () => {
    cy.scrollTo('bottom');
});

Then('I should see a list of articles', () => {
    homePage.assertArticleListVisible();
});