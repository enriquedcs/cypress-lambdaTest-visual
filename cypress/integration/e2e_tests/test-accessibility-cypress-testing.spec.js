import config from './config.json'
import MainPage from '../../page-objects/components/MainPage'

describe('Visual Testing Cypress', () => {
    before(function(){
        cy.visit(`${config.URL4}`)
    })
   
    it('verify full Page is displayed correctly', () =>{
     
        //cy.document().toMatchImageSnapshot()
        cy.pa11y()            
    })

    it('verify Multiple elements across the pages', () =>{   

        //First element Screenshot
        //MainPage.elementOne()
        //Second Element Screenshot
        //MainPage.elementTwo()
        cy.origin(`${config.URL3}`, () => {
            cy.visit('/')
        }) 
     
    })

    it.skip('Verify blogs related to Cypress', () => {

        MainPage.search('Cypress')
        //Full page plus renaming screenshot
        cy.document().toMatchImageSnapshot({
            name: 'Screenshot Blogs related to Cypress'
        })
    })

})