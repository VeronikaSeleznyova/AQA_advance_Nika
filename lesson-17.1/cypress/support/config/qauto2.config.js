const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',
    supportFile: 'lesson-17.1/cypress/support/e2e.js',
  },
  env: {
    userEmail: 'vsel1@gmail.com',
    userPassword: 'Passs999',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/qauto2',
    overwrite: true,
    html: true,
    json: true,
  },
});
