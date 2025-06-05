class DespesasPublicasPage {

getTituloPagina() {
  return cy.contains('h2', 'Despesas Públicas');
}
  verificarTituloPagina(tituloEsperado) {
    this.getTituloPagina().should('be.visible').and('contain.text', tituloEsperado);
  }

  
  getAreaConsultaDespesas() {
    return cy.get('#button-consulta-despesas'); 
  }

  verificarAreaConsultaDespesasVisivel() {
    this.getAreaConsultaDespesas().should('be.visible');
  }
}
export default new DespesasPublicasPage();