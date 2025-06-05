class LicitacoesContratosPage {
  getTituloPagina() {
   
    return cy.contains('h2', 'Licitações');
  }

  verificarTituloPagina(tituloEsperado) {

    this.getTituloPagina().should('be.visible').and('contain.text', tituloEsperado);
  }
}

export default new LicitacoesContratosPage();