const CampaignWebpage = require('../pageobjects/CampaignWebpage');
const allureReporter = require('@wdio/allure-reporter').default


describe('my campaign website', () => {
    it('should do some assertions', async () => {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await expect(browser).toHaveUrlContaining('volvo')
        await expect(browser).toHaveTitle('A million more | Volvo Cars - International')
        await expect(browser).toHaveTitleContaining('Volvo')
       
     
      
        
    });
    it('should save a screenshot of the browser view', async () => {
       
        await browser.saveScreenshot('.C:/Users/Parul/nodejs/Automation-Test-For-Campaign/allure-results/screenshot.png');
       
    });
})



// const elem = $('.tagline')
// expect(elem).toHaveText('Next-gen browser and mobile automation test framework for Node.js')
// expect(elem).toHaveText(['Next-gen browser and mobile automation test framework for Node.js', 'Adding helper functions'])

// describe('my campaign website header', () => {
//     it('should do some assert', async () => {
// await header.getText('Ideas that change the world are often the most controversial.')
// await expect(header).toHaveText('Ideas')
// })
// })
// // describe('Suite', () => {
// //     it('Case', () => {
// //         allureReporter.addFeature('Feature')
// //     })
// // })




