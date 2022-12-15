const {chromium} = require('playwright');

( async() => {
    // launching browser
    const browser = await chromium.launch({headless: false, slowMo: 700});
    const context = await browser.newContext({
        recordVideo: {
            dir:'./recordings'
        }
    });
    // creating a page inside browser
    const page = await context.newPage();
    // navigating to site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    // take screenshot
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', {state: 'hidden'});
    //closing browser
    await browser.close();
})();