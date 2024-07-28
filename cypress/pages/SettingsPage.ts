import { Page } from './Page';

class SettingsPage extends Page {
    readonly logoutButton = 'button.btn.btn-outline-danger';
    readonly profileForm = 'form';
    readonly usernameInput = 'input[placeholder="Your Name"]';
    readonly emailInput = 'input[placeholder="Email"]';
    readonly bioInput = 'textarea[placeholder="Short bio about you"]';
    readonly submitButton = 'button[type="submit"]';
    readonly profileUsername = '.user-info .username';
    readonly profileEmail = '.user-info .email';

    clickLogout() {
        this.clickButton(this.logoutButton);
    }

    fillProfileForm(username: string, email: string, bio: string) {
        this.getElement(this.usernameInput).clear().type(username);
        this.getElement(this.emailInput).clear().type(email);
        this.getElement(this.bioInput).clear().type(bio);
    }

    submitProfileForm() {
        this.getElement(this.submitButton).click();
    }

    assertProfileUsername(expectedUsername: string) {
        this.getElement(this.profileUsername).should('contain.text', expectedUsername);
    }

    assertProfileEmail(expectedEmail: string) {
        this.getElement(this.profileEmail).should('contain.text', expectedEmail);
    }
}

export default new SettingsPage();
