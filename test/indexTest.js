const { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting } = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe('index.js', () => {
  describe('currentUser', () => {
    it('is defined', () => {
      expect(currentUser).to.exist;
    });
  });

  describe('welcomeMessage', () => {
    it('contains "Welcome to Flatbook, "', () => {
      expect(welcomeMessage).to.include('Welcome to Flatbook, ');
    });
    it('contains the value of the "currentUser" variable', () => {
      expect(welcomeMessage).to.include(currentUser);
    });
    it('ends with an exclamation point!', () => {
      expect(welcomeMessage).to.match(/!$/);  // Using regex to check if it ends with '!'
    });
  });

  describe('excitedWelcomeMessage', () => {
    it('contains "WELCOME TO FLATBOOK, "', () => {
      expect(excitedWelcomeMessage).to.include('WELCOME TO FLATBOOK, ');
    });
    it('contains the value of the "currentUser" variable', () => {
      expect(excitedWelcomeMessage).to.include(currentUser.toUpperCase());
    });
    it('ends with an exclamation point', () => {
      expect(excitedWelcomeMessage).to.match(/!$/);  // Using regex to check if it ends with '!'
    });
  });

  describe('shortGreeting', () => {
    it('contains "Welcome, "', () => {
      expect(shortGreeting).to.include('Welcome, ');
    });
    it('contains the first initial of the name stored in the "currentUser" variable', () => {
      expect(shortGreeting).to.include(currentUser.slice(0, 1));
    });
    it('ends with an exclamation point', () => {
      expect(shortGreeting).to.match(/!$/);  // Using regex to check if it ends with '!'
    });
  });
});
