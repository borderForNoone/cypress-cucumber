import { Page } from './Page';

class LoginPage extends Page {
  readonly emailInput = 'input[name="email"]';
  readonly passwordInput = 'input[name="password"]';
  readonly submitButton = 'button[type="submit"]';
  readonly errorMessages = '.error-messages';

  fillLoginForm(email: string, password: string) {
    this.typeIntoInput(this.emailInput, email);
    this.typeIntoInput(this.passwordInput, password);
  }

  submitLoginForm() {
    this.clickButton(this.submitButton);
  }

  assertErrorMessageVisible(expectedMessage: string) {
    this.getElement(this.errorMessages)
      .should('be.visible')
      .and('contain.text', expectedMessage);
  }
}

export default new LoginPage();