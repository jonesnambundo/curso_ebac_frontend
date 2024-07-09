/// <reference types="cypress" />

describe('Agenda de Contatos', () => {
    beforeEach(() => {
        // Visitar a aplicação antes de cada teste
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        // Adicionar novo contato
        cy.get('input[type="text"]').type('Novo Contato');
        cy.get('input[type="email"]').type('novo@contato.com');
        cy.get('input[type="tel"]').type('35 991925561');
        cy.get('button[type="submit"]').click();

        // Verifica se o contato foi adicionado
        cy.contains('Novo Contato').should('exist');
        cy.contains('novo@contato.com').should('exist');
        cy.contains('35 991925561').should('exist');
    });

    it('Deve editar um contacto', () => {
        // Adiciona o contacto inicial para edição
        cy.get('button[type="button"]').parent().find('.edit').first().click();

        // Limpa os campos de entrada antes de editar
        cy.get('input[type="text"]').clear().type('Contato Editar');
        cy.get('input[type="email"]').clear().type('editar@contato.com');
        cy.get('input[type="tel"]').clear().type('35 991925561');

        // Clica no botão de submissão para salvar as alterações
        cy.get('button[type="submit"]').click();

        // Verifica se as alterações foram salvas corretamente
        cy.contains('Contato Editar').should('exist');
        cy.contains('editar@contato.com').should('exist');
        cy.contains('35 991925561').should('exist');
    });

    it('Deve remover um contato', () => {
        // Remover o contato
        cy.get('.delete').last().click()

        // Verificar se o contato foi removido
        cy.contains('Contato Remover').should('not.exist');
    });

});
