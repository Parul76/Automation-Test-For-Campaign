const campaignWebpage = require('../pageobjects/campaignWebpage');
const allureReporter = require('@wdio/allure-reporter')



describe('my campaign website', () => {
    it('should do some assertions', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await expect(browser).toHaveUrlContaining('volvo')
        await expect(browser).toHaveTitle('A million more | Volvo Cars - International')
        await expect(browser).toHaveTitleContaining('Volvo')   
     
    })
  
 });
    
    