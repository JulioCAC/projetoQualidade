class LicitacoesContratosPage {
  getTituloPagina() {

    return cy.get('#main-content').find('h2').first();
  }

  verificarTituloPagina(tituloEsperado) {
   
    this.getTituloPagina({ timeout: 10000 })
      .should('be.visible')                 
      .and('contain.text', tituloEsperado); 
  }
}

export default new LicitacoesContratosPage();