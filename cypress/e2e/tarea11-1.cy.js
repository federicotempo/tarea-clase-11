/// <reference types="Cypress" />

describe('Test de tarea 11 actividad 2', () => {
  beforeEach('Ingreso', () => {
    cy.visit('http://localhost:8080/tarea1-clase6/tarea1-clase6.html')
  });

  it('testa funcionalidad de la tarea 6', () => {
    cy.get('#cantidad-integrantes').type(1);
    cy.get('#boton-cantidad').click();
    cy.get('.integrante input').type(20);
    cy.get('#boton-calcular').click();
    cy.get('#promedio').should('have.text', '20.00');
    cy.get('#mayor').should('have.text', '20');
    cy.get('#menor').should('have.text', '20')

  })

})