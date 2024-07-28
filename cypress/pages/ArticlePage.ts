import { Page } from './Page';

class ArticlePage extends Page {
    readonly editArticleButton = 'a.btn.btn-outline-secondary.btn-sm';
    readonly deleteArticleButton = 'button.btn.btn-outline-danger.btn-sm';
    readonly commentInput = 'textarea[placeholder="Write a comment..."]';
    readonly postCommentButton = 'button[type="submit"]';
    readonly likeButton = 'button.btn-outline-primary';
    readonly articleContent = '.article-content';
    readonly likeCountSpan = 'span.counter';

    assertArticleTitle(title: string) {
        this.assertContainsText('h1', title);
    }

    clickEditArticle() {
        this.clickButton(this.editArticleButton);
    }

    getArticleTitle() {
        return this.getElement('h1').invoke('text');
    }

    clickDeleteArticleButton() {
        this.clickButton(this.deleteArticleButton);
    }

    addComment(comment: string) {
        this.clearAndTypeIntoInput(this.commentInput, comment);
    }

    clearAndTypeIntoInput(selector: string, text: string) {
        this.getElement(selector).clear().type(text);
    }

    submitComment() {
        this.clickButton(this.postCommentButton);
    }

    assertCommentVisible(comment: string) {
        this.assertContainsText('.card-text', comment);
    }

    clickLikeButton() {
        this.clickButton(this.likeButton);
    }

    waitForPageToLoad() {
        this.getElement(this.articleContent).should('be.visible');
    }

    getInitialLikeCount() {
        return this.getElement(this.likeCountSpan).invoke('text');
    }
}

export default new ArticlePage();
