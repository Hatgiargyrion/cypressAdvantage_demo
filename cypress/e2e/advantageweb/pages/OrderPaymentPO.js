class OrderPaymentPO {

    validateSelectedProductIntoOrderPayment() {
        cy.get('@productName').then((productName) => {
            cy.xpath("//div[@id='orderPayment']//h3")
                .invoke('text')
                .then((text) => {
                    expect(text.trim().toLowerCase()).to.eq(productName.toLowerCase());
                });
        })
    }
}

export default OrderPaymentPO