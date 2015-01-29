// JavaScript source code
var env = require('./environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {
    //seleniumAddress: env.seleniumAddress,
    directConnect: true,
    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
      'Specs/**/*.feature'
    ],

    capabilities: env.capabilities,

    baseUrl: env.baseUrl,

    cucumberOpts: {
        require: 'Specs/StepDefinitions/*.js',
        tags: '@dev',
        format: 'summary'
    }
};