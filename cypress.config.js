const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  failOnStatusCode: false,
  video: true,
  videoCompression: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 4000,
  viewportHeight: 800,
  viewportWidth: 1080,
  env: {
    baseurl: "https://www.saucedemo.com/",
    username: "standard_user",
    password: "secret_sauce"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
