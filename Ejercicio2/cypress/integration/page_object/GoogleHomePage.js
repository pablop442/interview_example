class GoogleHomePage {
    getSearchBarInput(){
        return cy.get('#APjFqb')
    }
    getAlertAcceptButton(){
        return cy.get('#L2AGLb > .QS5gu')
    }

    getSearchButton(){
        return cy.get('.FPdoLc > center > .gNO89b')
    }

    getWikipediaLink(){
        return cy.get('.jGGQ5e > .yuRUbf > a > .TbwUpd > div > .iUh30')
    }
}

export default GoogleHomePage