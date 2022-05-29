import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage"
import credentials from "../../fixtures/credentials";

const LOGIN_PAGE = new LoginPage();
const HOME_PAGE = new HomePage();


describe('Login test', () => {

    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/')
    })

    
    it('success login', () => {
        LOGIN_PAGE.login(credentials.validLogin.user,credentials.validLogin.password);
        HOME_PAGE.getTitle().should('be.visible');
    });

    it('locked user', () => {
        LOGIN_PAGE.login(credentials.lockedLogin.user,credentials.lockedLogin.password);
        LOGIN_PAGE.getError().should('be.visible');
    });

});