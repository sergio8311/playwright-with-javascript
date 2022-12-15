const {chromium} = require('playwright');

( async() => {
    // launching browser
    const browser = await chromium.launch({headless: false, slowMo: 700});
    // creating a page inside browser
    const page = await browser.newPage();
    // navigating to site
    await page.goto('https://applitools.com/');
    // take screenshot
    await page.screenshot({path: `./screenshots/screenshot.png`});
    const logo = await page.$('.logo');
    await logo.screenshot({path: `./screenshots/logo.png`});
    await page.screenshot({path: `./screenshots/fullpage.png`, fullPage: true});
    //closing browser
    await browser.close();
})();