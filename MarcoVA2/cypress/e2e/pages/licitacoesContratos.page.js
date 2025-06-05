class LicitacoesContratosPage {
  getTituloPagina() {
    // CORRIGIDO: Agora ele procura por uma tag <h2> que contenha
    // o texto exato "Licitações", conforme a imagem que você enviou.
    return cy.contains('h2', 'Licitações');
  }

  verificarTituloPagina(tituloEsperado) {
    // Este método não precisa de alteração.
    // Ele vai receber 'Licitações' do seu step e vai funcionar corretamente.
    this.getTituloPagina().should('be.visible').and('contain.text', tituloEsperado);
  }
}

export default new LicitacoesContratosPage();