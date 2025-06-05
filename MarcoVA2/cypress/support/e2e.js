import './commands';

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('await is only valid in async functions')) {
    Cypress.log({
      name: 'Uncaught Exception',
      message: 'Ignorando erro de SyntaxError "await" vindo do código da aplicação.',
    });
    return false;
  }
  return true;
});
