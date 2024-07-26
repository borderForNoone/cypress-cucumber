export class Page {
    readonly navbar = '.navbar';
    readonly navLink = '.navbar .nav-link';
  
    visit(path: string) {
        cy.visit(path);
    }
  
    getElement(selector: string) {
        return cy.get(selector);
    }
  
    clickButton(selector: string) {
        this.getElement(selector).click();
    }
  
    typeIntoInput(selector: string, text: string) {
        this.getElement(selector).type(text);
    }
  
    assertContainsText(selector: string, text: string) {
        this.getElement(selector).should('contain.text', text);
    }
    
}