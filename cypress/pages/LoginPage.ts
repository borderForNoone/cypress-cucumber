import { Page } from './Page';

export class LoginPage extends Page {
  readonly emailInput = 'input[name="email"]';
  readonly passwordInput = 'input[name="password"]';
  readonly submitButton = 'button[type="submit"]';

  fillLoginForm(email: string, password: string) {
    this.typeIntoInput(this.emailInput, email);
    this.typeIntoInput(this.passwordInput, password);
  }

  submitLoginForm() {
    this.clickButton(this.submitButton);
  }
}
