import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../pages/loginPage"
import { HomePage } from "../../pages/homePage"
import credentials from "../../../fixtures/credentials";

const LOGIN_PAGE = new LoginPage();
const HOME_PAGE = new HomePage();

//--------- Common ---------
Given('I am in the login site', () => {
    cy.visit('https://www.saucedemo.com/')
  })

//---------Successful login - declarative---------
  When('I try to login using valid credentials', () => {
    LOGIN_PAGE.login(credentials.validLogin.user,credentials.validLogin.password);
  })

  Then('I am able to enter into the site', () => {
    HOME_PAGE.getTitle().should('be.visible');
  })

  //---------Successful login - imperative---------
  When('I write a valid user', () => {
    LOGIN_PAGE.typeUser(credentials.validLogin.user);
  })

  When('I write a valid password', () => {
    LOGIN_PAGE.typePassword(credentials.validLogin.password);
  })  

  When('I click login', () => {
    LOGIN_PAGE.clickLoginBtn();
  })

  Then('I am redirect to the shop site', () => {
    HOME_PAGE.getTitle().should('be.visible');
  })

  //---------Failed login - locked user---------
    When('I try to login using locked credentials', () => {
      LOGIN_PAGE.login(credentials.lockedLogin.user,credentials.lockedLogin.password);
    })

    Then('I am not able to enter into the site', () => {
      LOGIN_PAGE.getError().should('be.visible');
    })