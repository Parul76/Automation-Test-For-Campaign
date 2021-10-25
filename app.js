exports.config = {
 
framework: 'mocha',
baseUrl: 'https://www.volvocars.com/intl/v/car-safety/a-million-more',
waitforTimeout: 1000000,
connectionRetryTimeout: 120000,
services: ['chromedriver'],
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

}
