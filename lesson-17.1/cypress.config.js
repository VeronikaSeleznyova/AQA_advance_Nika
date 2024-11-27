// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     overwrite: false,
//     html: true,
//     json: true,
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    setupNodeEvents(on, config) {
      // Настройка дополнительных событий
    },
    supportFile:
      '/Users/bigmag/Desktop/AQA_advance_Nika/lesson-17.1/cypress/support',
  },
  env: {
    userEmail: 'ver0@gmail.com',
    userPassword: 'Passs999',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/qauto1',
    overwrite: true,
    html: true,
    json: true,
  },
});
