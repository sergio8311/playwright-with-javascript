const {chromium, devices} = require('playwright');
const iPhone = devices['iPhone 11'];

( async() => {
    // launching browser
    const browser = await chromium.launch({headless: false, slowMo: 700});
    const context = await browser.newContext({
        ...iPhone, 
        permissions: ['geolocation'],
        geolocation: {latitude: 41.4058059, longitude: 2.2059822},
        locale: 'fr-FR'
    });
    // creating a page inside browser
    const page = await context.newPage();
    // navigating to site
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000);

    //closing browser
    await browser.close();
})();