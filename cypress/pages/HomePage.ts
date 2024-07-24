import { Page } from './Page';

export class HomePage extends Page {
  assertUsernameInTopRight(username: string) {
    this.assertContainsText(this.navLink, username);
  }
}
