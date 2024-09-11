class HomePO {
    acessWebsite() {
        cy.visit('https://advantageonlineshopping.com/#/')
        elements.logo().should('be.visible')
    }

    

    searchProduct(text) {
        elements.fieldSearch().should('be.visible')
        elements.fieldSearch().click()
        elements.fieldSearch().type(text)
        elements.btnSearch().click()
    }
}

const elements = {
    logo: () => cy.get('.logo > a'),
    btnSearch: () => cy.get('#mobileSearch > #menuSearch'),
    fieldSearch: () => cy.get('#mobileSearch > .roboto-medium')
}

export default HomePO