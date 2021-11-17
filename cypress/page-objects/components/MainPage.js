export default class MainPage {
    static elementOne() {
        cy.get("[class='col-xs-12 col-md-12 blog-list']:nth-of-type(3)").toMatchImageSnapshot()
    }

    static elementTwo() {
        cy.get("[class='col-xs-12 col-md-12 blog-list']:nth-of-type(5)").toMatchImageSnapshot({
            threshold: 0.1
        })
    }

    static search(text){
        cy.get(`input[name='s']`).type(`${text} {enter}`)
    }
}