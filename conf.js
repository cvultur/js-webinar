exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

    specs: 'module-5/features/**/*.feature',

    // cucumber command line options
    cucumberOpts: {
        require: ['module-5/step_definitions/**/*.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: ["node_modules/cucumber-pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        'dry-run': false,              // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

    onPrepare: function () {
        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;
        
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
};