import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import homePortalPage from '../pages/homePortal.page';
import despesasPublicasPage from '../pages/despesasPublicas.page';
import licitacoesContratosPage from '../pages/licitacoesContratos.page';

Given('que o usuário está na página inicial do Portal da Transparência', () => {
  homePortalPage.visit();


  cy.get('body', { timeout: 10000 }).then($body => {
    const rejectCookieButtonText = 'Rejeitar cookies opcionais';
  
    const $rejectCookieButton = $body.find(`button:contains("${rejectCookieButtonText}")`);
    if ($rejectCookieButton.length > 0 && $rejectCookieButton.is(':visible')) {
      cy.log(`Banner de cookies: Botão "${rejectCookieButtonText}" encontrado. Clicando.`);
      cy.wrap($rejectCookieButton).click({ force: true });
    } else {
      cy.log(`Banner de cookies: Botão "${rejectCookieButtonText}" não encontrado ou não visível.`);
    }
  });

  cy.get('body', { timeout: 10000 }).then($body => {
    const skipTutorialButtonText = 'Pular tutorial';
    const checkboxID = 'check-nao-visualizar-tour-novamente';
    const $skipTutorialButton = $body.find(`button:contains("${skipTutorialButtonText}")`);
    const $checkboxInput = $body.find(`#${checkboxID}`);

    if ($skipTutorialButton.length > 0 && $skipTutorialButton.is(':visible')) {
      cy.log(`Modal "Portal Atualizado": Botão "${skipTutorialButtonText}" encontrado.`);
      if ($checkboxInput.length > 0) {
        cy.wrap($checkboxInput).check({ force: true });
        cy.log(`Modal "Portal Atualizado": Checkbox "#${checkboxID}" marcado.`);
      }
      cy.wrap($skipTutorialButton).click({ force: true });
    } else {
      cy.log(`Modal "Portal Atualizado": Não encontrado ou não visível.`);
    }
  });
});


When('ele navega para a seção de "Despesas Públicas"', () => {
  homePortalPage.navegarParaDespesasPublicas();
});

Then('a página de "Despesas Públicas" deve ser exibida com o título correto', () => {
  despesasPublicasPage.verificarTituloPagina('Despesas Públicas');
  cy.url().should('include', '/despesas/visao-geral');
});

And('uma área para consulta de despesas deve estar visível', () => {
  despesasPublicasPage.verificarAreaConsultaDespesasVisivel();
});



When('ele navega para a seção de "Licitações e Contratos"', () => {
  homePortalPage.navegarParaLicitacoesContratos();
});

Then('a página de "Licitações e Contratos" deve ser exibida com o título correto', () => {

  licitacoesContratosPage.verificarTituloPagina('Licitações e Contratos');
  cy.url().should('include', 'licitacoes-contratos');
});
