import { Page } from './Page';

export class RegistrationPage extends Page {
  readonly usernameInput = 'input[name="username"]';
  readonly emailInput = 'input[name="email"]';
  readonly passwordInput = 'input[name="password"]';
  readonly submitButton = 'button[type="submit"]';

  fillRegistrationForm(username: string, email: string, password: string) {
    this.typeIntoInput(this.usernameInput, username);
    this.typeIntoInput(this.emailInput, email);
    this.typeIntoInput(this.passwordInput, password);
  }

  submitRegistrationForm() {
    this.clickButton(this.submitButton);
  }
}
