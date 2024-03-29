/// <reference types="Cypress" />

describe('Test de tarea 11 actividad 2', () => {
  beforeEach('Ingreso', () => {
    cy.visit('http://localhost:8080/tarea2-clase6/tarea2-clase6.html')
  });

  it('testa funcionalidad de la tarea 6', () => {
    cy.get('#cantidad-trabajadores').type(1);
    cy.get('#boton-agregar').click();
    cy.get('.trabajador input').type(200);
    cy.get('#boton-calcular').click();
    cy.get('#salario-anual-promedio').should('have.text', '200.00');
    cy.get('#salario-mensual-promedio').should('have.text', '16.67');
    cy.get('#salario-mayor').should('have.text', '200')
    cy.get('#salario-menor').should('have.text', '200')

  })

})