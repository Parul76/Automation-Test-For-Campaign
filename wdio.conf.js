exports.config = {
 
framework: 'mocha',
bail: 0,
baseUrl: 'https://www.volvocars.com/intl/v/car-safety/a-million-more',
waitforTimeout: 1000000,
connectionRetryTimeout: 120000,
connectionRetryCount: 3,
services: ['chromedriver'],
reporters: [[ 'spec',{
outputDir: 'spec-results',
disableWebdriverStepsReporting: true,
disableWebdriverScreenshotsReporting: true,
}]],
reporters: [['allure', {
outputDir: 'allure-results',
disableWebdriverStepsReporting: true,
disableWebdriverScreenshotsReporting: true,
}]],

specs: [
'./test/specs/**/*.js'
],

suites: {
    specs: [
            './test/specs/basicTest.js',
            './test/specs/basictest.failure.js'
            ],

    }, 
    capabilities: [{
        maxInstances: 10,
        browserName: 'chrome',
    }],
   
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
