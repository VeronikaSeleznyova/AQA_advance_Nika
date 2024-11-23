const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    supportFile: 'lesson-17.1/cypress/support/e2e.js',
  },
  env: {
    userEmail: 'vsel0@gmail.com',
    userPassword: 'Passs999',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/qauto',
    overwrite: true,
    html: true,
    json: true,
  },
});
