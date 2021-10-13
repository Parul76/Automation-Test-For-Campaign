const CampaignWebpage = require('../pageobjects/CampaignWebpage');

describe('my campaign website', () => {
    it('should do some assertions', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await expect(browser).toHaveTitle('A million more | Volvo Cars - International')
    })
})



