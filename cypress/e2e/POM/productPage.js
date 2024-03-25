class ProductPage{

  clickOnProduct(product){
    cy.get(".inventory_item")
    .find(".inventory_item_description")
    .contains(product)
    .click();
  }

  clickAddToCard(){
    cy.contains("Add to cart")
    .click();
  }

  addProductToCartDirectly(product){
    cy.get(".inventory_item")
    .find(".inventory_item_label")
    .contains(product)
    .parent()
    .next()
    .contains("Add to cart")
    .click();
  }


}
export default ProductPage;