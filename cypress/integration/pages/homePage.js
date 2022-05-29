import {CommonPageConfig} from "./pageConfig";
const commonPageConfig = new CommonPageConfig();

export class HomePage{
    
    constructor() {
        this.logValue = commonPageConfig.getLogValue();
        this.titleLabel='.title';
    }

    getTitle(){
        return cy.get(this.titleLabel, { log: this.logValue });
    }
}