import LoginPage from "../POM/loginPage"
import ProductPage from "../POM/productPage";
import BasePage from "../POM/basePage";
import { forEach } from "cypress/types/lodash";
const loginPage = new LoginPage();
const productPage = new ProductPage();
const basePage = new BasePage();
let menuName = "All Items";
const products = ["Sauce Labs Bolt T-Shirt",
                   "Sauce Labs Bike Light"]

describe('template spec', () => {
  it('passes', () => {
   // Log in to the application.
    loginPage.login();
    
    //Click on the "Sauce Labs Backpack" product on the Product Page.
    productPage.clickOnProduct("Sauce Labs Backpack");

    //Add the "Sauce Labs Backpack" product to the cart.
    productPage.clickAddToCard();

    //Navigate to the Products Page.
    basePage.navigateToBaseMenu(menuName);

    //Directly add the "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" products to the cart.
   // productPage.addProductToCartDirectly("Sauce Labs Bike Light");
     productPage.addProductToCartDirectly("Sauce Labs Bolt T-Shirt");

     products.forEach(product =>{
     productPage.addProductToCartDirectly(product);
       })


  })
})


//Return to the Cart Page.
//Remove the "Sauce Labs Bolt T-Shirt" product from the Cart.
//Verify that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are displayed on the Cart Page.
//Click on the checkout button.
//Enter the buyer's/recipient's information and Click on the continue button.
//Confirm that "Sauce Labs Backpack" and "Sauce Labs Bike Light" are listed on the Overview Page.
//Click on the finish button.
//Log out of the application.