import GoogleHomePage from "../page_object/GoogleHomePage";

const googleHomePage = new GoogleHomePage();


describe('Get "automation" term information', function(){
    it('Searches "automation in Google and gets information from Wikipedia', function(){
        cy.visit(Cypress.env('url'));
        googleHomePage.getAlertAcceptButton().click();
        googleHomePage.getSearchBarInput().type('automatización').wait(100).type('{enter}');
        googleHomePage.getWikipediaLink().click();

        //Using origin to acces a second domain in the same test
        cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', ()=>{
            cy.get('#Historia').scrollIntoView();

            //Resolving promise to access the text of the paragraph
            cy.get('.mw-parser-output > :nth-child(44)').then((element)=>{

             const firstProjectYearParagraph = element.text();
             const firstProjectYears = 'entre el 300 a. C. y el 1200 d. C';

             expect(firstProjectYearParagraph).to.include(firstProjectYears);
             cy.screenshot('history-section', {capture: "runner", overwrite: true});
            })
        })
    })
})