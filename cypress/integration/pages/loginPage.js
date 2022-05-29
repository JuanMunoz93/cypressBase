import {CommonPageConfig} from "./pageConfig";
const commonPageConfig = new CommonPageConfig();

export class LoginPage{
    
    constructor() {
        this.logValue = commonPageConfig.getLogValue();
        this.userInput='#user-name';
        this.passInput='#password';
        this.loginBtn='#login-button';
        this.errorLabel='.error-message-container.error';
      }

    login(user,password){
        cy.get(this.userInput, { log: this.logValue }).type(user);
        cy.get(this.passInput, { log: this.logValue }).type(password);
        cy.get(this.loginBtn, { log: this.logValue }).click();
    }

    typeUser(user){
        cy.get(this.userInput, { log: this.logValue }).type(user);
    }    

    typePassword(password){
        cy.get(this.passInput, { log: this.logValue }).type(password);
    }

    clickLoginBtn(){
        cy.get(this.loginBtn, { log: this.logValue }).click();
    }

    getError(){
        return cy.get(this.errorLabel, { log: this.logValue });
    }
}