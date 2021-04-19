import { getGreeting, getAddSignUpButton, getUsers } from '../support/app.po';

describe('client', () => {
  beforeEach(() => { 
    cy.visit('/')
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to Shield Sign-Up!!'); // reference; delete before submission
    // getUsers().contains('Welcome to Shield Sign-Up!!');
  
    getAddSignUpButton().click();
    getGreeting().should((m) => expect(m.length).equal(1));
  });
});
