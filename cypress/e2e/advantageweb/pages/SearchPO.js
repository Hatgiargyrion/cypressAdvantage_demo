class SearchPO {

    selectProduct() {

        cy.xpath('//div[@class="cell categoryRight"]//li[1]')
            .should('be.visible').click()
        cy.xpath('//div[@class="cell categoryRight"]//li[1]//a[contains(@class,"productName")]')
            .invoke('text')
            .then((text) => {
                cy.wrap(text).as('productName')
            });
    }

    validateSearch() {
        cy.xpath('//a[contains(.,"Search result:")]')
            .should('be.visible')
    }



}

const elements = {
    imgProduct: () => cy.get('#speakersImg'),
    category: () => cy.get('#speakersImg')
}

export default SearchPO