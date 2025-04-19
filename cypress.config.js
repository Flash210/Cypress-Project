const { defineConfig } = require("cypress");

module.exports = defineConfig({



  env: {

    appplicationUrl: 'https://www.saucedemo.com/',
  },

  // mocha reporter for generating reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Senior Autmation Engineer',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
