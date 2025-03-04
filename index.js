// index.js
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Export variables for testing
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};
