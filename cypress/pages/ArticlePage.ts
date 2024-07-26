import { Page } from './Page';

class ArticlePage extends Page {
    readonly editArticleButton = 'a.btn.btn-outline-secondary.btn-sm';

    assertArticleTitle(title: string) {
        this.assertContainsText('h1', title);
    }

    clickEditArticle() {
        this.clickButton(this.editArticleButton);
    }

    getArticleTitle() {
        return this.getElement('h1').invoke('text');
    }
}

export default new ArticlePage();
