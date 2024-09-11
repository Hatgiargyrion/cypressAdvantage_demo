const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 0,
    screenshotOnRunFailure: false,
    video: false,
    specPattern: ["**/*.feature"],
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});