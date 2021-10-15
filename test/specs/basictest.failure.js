const campaignWebpage = require('../pageobjects/campaignWebpage');
const allureReporter = require('@wdio/allure-reporter')

describe('Invalid test cases for my campaign website', () => {
    it('should do some assertions for fail cases', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await expect(browser).toMatch('fail')
    })
 });