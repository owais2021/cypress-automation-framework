class HomePage_PO {
    visitHompage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, {timeout: 8000})
    }
}
export default HomePage_PO;