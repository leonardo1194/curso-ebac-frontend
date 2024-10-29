describe("Teste da aplicação de agenda de contato", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("Preencher o formulario da agenda", () => {
    cy.get('[type="text"]').type("Rafael Oshikawa");
    cy.get('[type="email"]').type("rafaeloshikawa@gmail.com");
    cy.get('[type="tel"]').type("99 99999 9999");
    cy.contains("Adicionar").click();
  });

  it("Alteração do Contato inserido", () => {
    cy.contains("Editar").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="text"]').type("Contato Editado");
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type("contatoeditado@gmail.com");
    cy.get('[type="tel"]').clear();
    cy.get('[type="tel"]').type("11 11111 1111");
    cy.contains("Salvar").click();
  });
  
  it("Exclusão de um Contato Inserido", () => {
    cy.contains("Deletar").click();
  });
});
