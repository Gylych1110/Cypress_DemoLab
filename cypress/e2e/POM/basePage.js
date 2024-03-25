class BasePage{

  clickBurgerMenu(){
    cy.get('#react-burger-menu-btn').click();
  }

  navigateToBaseMenu(menuName){
    this.clickBurgerMenu();
    cy.get(".bm-item.menu-item",{timeout:10000})
    .contains(menuName)
    .click();
  }

}

export default BasePage;