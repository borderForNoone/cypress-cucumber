import { Page } from './Page';

class ProfilePage extends Page {
    readonly followButton = 'button.btn.btn-sm.action-btn';
    readonly unfollowButton = 'button.btn.btn-sm.action-btn';

    clickFollowButton() {
        this.clickButton(this.followButton);
    }

    assertUnfollowButtonVisible() {
        this.getElement(this.unfollowButton).should('be.visible');
    }
}

export default new ProfilePage();
