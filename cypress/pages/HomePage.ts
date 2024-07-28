import { Page } from './Page';

class HomePage extends Page {
  readonly newArticleButton = 'a.nav-link[href="/editor"]';
  readonly settingsButton = 'a.nav-link[href="/settings"]';
  readonly articlePreview = '.article-preview';
  readonly popularTags = '.sidebar .tag-list';
  readonly navLink = '.navbar .nav-link';
  readonly homePage = '.home-page';
  readonly tagList = '.tag-list';
  readonly tagDefault = '.tag-default';
  readonly articleTitle = 'h1';
  readonly loadingTagsMessage = '.tag-list > div';
  readonly loadingArticlesMessage = '.article-preview > div';
  readonly globalFeedLink = 'a.nav-link:contains("Global Feed")';
  readonly bottom = 'bottom';

  private clickedTag: string | null = null;

  assertUsernameInTopRight(username: string) {
    this.assertContainsText(this.navLink, username);
  }

  clickNewArticle() {
    this.clickButton(this.newArticleButton);
  }

  clickSettings() {
    this.clickButton(this.settingsButton);
  }

  assertHomePageLoaded() {
    this.getElement(this.homePage).should('be.visible');
  }

  assertArticleNotPresent(title: string) {
    this.getElement(`${this.articleTitle}:contains(${title})`).should('not.exist');
  }

  assertArticleListVisible() {
    this.getElement(this.articlePreview).should('have.length.greaterThan', 0);
  }

  clickRandomPopularTag() {
    cy.get(this.loadingTagsMessage).should('not.exist');

    cy.get(this.popularTags).should('be.visible');

    cy.get(this.tagList).find(this.tagDefault).then($tags => {
      if ($tags.length === 0) {
        throw new Error('No tags found in the tag list.');
      }

      const randomIndex = Math.floor(Math.random() * $tags.length);
      const randomTag = $tags.eq(randomIndex).text().trim();

      cy.wrap($tags.eq(randomIndex)).click();

      this.clickedTag = randomTag;
    });
  }

  assertArticlesWithRandomPopularTagVisible() {
    if (this.clickedTag) {
      const tag = this.clickedTag;

      cy.get(this.articlePreview).should('be.visible');

      cy.get(this.tagList).contains(tag).should('be.visible');

      cy.get(this.articlePreview).should('have.length.greaterThan', 0).each(article => {
        cy.wrap(article).contains(this.tagDefault, tag).should('exist');
      });
    } else {
      throw new Error('No tag was clicked.');
    }
  }

  clickFirstArticle() {
    this.getElement(this.articlePreview).first().click();
  }

  clickGlobalFeed() {
    this.getElement(this.globalFeedLink).click();
  }

  scrollToBottom() {
    cy.scrollTo(this.bottom);
  }
}

export default new HomePage();
