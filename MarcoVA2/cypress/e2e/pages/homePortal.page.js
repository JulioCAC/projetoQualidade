class HomePortalPage {
  visit() {
    cy.visit('/'); 
  }



getMenuDespesasPublicas() {
  return cy.contains('h5', 'Despesas Públicas').closest('div.card-front');
}

  navegarParaDespesasPublicas() {
    this.getMenuDespesasPublicas()
      .should('be.visible')
      .click({ waitForAnimations: false, force: true });
  }

 
  getMenuLicitacoesContratos() {
    return cy.contains('h5', 'Licitações Públicas').closest('div.card-front');
  }

  navegarParaLicitacoesContratos() {
    this.getMenuLicitacoesContratos()
      .should('be.visible')
      .click({ waitForAnimations: false, force: true });
  }
}
export default new HomePortalPage();