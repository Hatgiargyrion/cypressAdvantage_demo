class ShoppingCartPO {

    goToOrderPayment() {
        cy.get('#checkOutButton').should('be.visible').click()
    }

    validateSelectedProductIntoCart() {
        cy.get('@productName').then((productName) => {
            cy.xpath("//label[contains(@class,'productName')]")
                .invoke('text')
                .then((text) => {
                    expect(text.trim().toLowerCase()).to.eq(productName.toLowerCase());
                });
        })
    }
}

export default ShoppingCartPO