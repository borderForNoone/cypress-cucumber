import { Page } from './Page';

class HomePage extends Page {
  readonly newArticleButton = 'a.nav-link[href="/editor"]';

  assertUsernameInTopRight(username: string) {
    this.assertContainsText(this.navLink, username);
  }

  clickNewArticle() {
    this.clickButton(this.newArticleButton);
  }
}

export default new HomePage();