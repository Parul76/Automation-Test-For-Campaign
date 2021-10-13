const CampaignWebpage = require('../pageobjects/CampaignWebpage');
const allureReporter = require('@wdio/allure-reporter').default

describe('my campaign website', () => {
    it('should do some assertions', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await expect(browser).toHaveTitle('A million more | Volvo Cars - International')
    })
})

describe('Suite', () => {
    it('Case', () => {
        allureReporter.addFeature('Feature')
    })
})

