class ProductPO {

    addToCart() {
        cy.xpath('//button[normalize-space(text())="ADD TO CART"]')
            .should('be.visible').click()
    }

    goToShoppingCart() {
        cy.get('#menuCart').should('be.visible').click()
    }

}



export default ProductPO