# language: pt
Funcionalidade: Consulta de informações no Portal da Transparência

  Cenário: Acessar a seção de Despesas Públicas e verificar título
    Dado que o usuário está na página inicial do Portal da Transparência
    Quando ele navega para a seção de "Despesas Públicas"
    Então a página de "Despesas Públicas" deve ser exibida com o título correto
    E uma área para consulta de despesas deve estar visível

  Cenário: Acessar a seção de Licitações e Contratos e verificar título
    Dado que o usuário está na página inicial do Portal da Transparência
    Quando ele navega para a seção de "Licitações Públicas"
    Então a página de "Licitações" deve ser exibida com o título correto
