import { Page } from './Page';

class CreateArticlePage extends Page {
    readonly titleInput = 'input[placeholder="Article Title"]';
    readonly descriptionInput = 'input[placeholder="What\'s this article about?"]';
    readonly bodyInput = 'textarea[placeholder="Write your article (in markdown)"]';
    readonly tagsInput = 'input[placeholder="Enter tags"]';
    readonly publishButton = 'button[type="button"]';

    fillArticleForm(title: string, description: string, body: string, tagList: string) {
        this.clearAndTypeIntoInput(this.titleInput, title);
        this.clearAndTypeIntoInput(this.descriptionInput, description);
        this.clearAndTypeIntoInput(this.bodyInput, body);
        this.clearAndTypeIntoInput(this.tagsInput, tagList);
    }

    submitArticleForm() {
        this.clickButton(this.publishButton);
    }

    private clearAndTypeIntoInput(selector: string, text: string) {
        const input = this.getElement(selector);
        input.clear().type(text);
    }
}

export default new CreateArticlePage();