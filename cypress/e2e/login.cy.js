// cypress/e2e/login.cy.js
describe("Login Test", () => {
  it("should login with correct credentials", () => {
    cy.visit("/login"); // Updated to visit the /login route

    // Fill the form
    cy.get('input[type="text"]').type("admin");
    cy.get('input[type="password"]').type("password123");

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Check if the "Logged in" text appears
    cy.contains("Logged in").should("exist");
  });
});
