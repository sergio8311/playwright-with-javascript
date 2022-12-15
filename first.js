const {firefox} = require('playwright');

( async() => {

    const browser = await firefox.launch({headless:false, slowMo: 400});
    const page = await browser.newPage();

    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
    await page.click('#accept-choices');

    // checks
    const checks = await page.$$('div.s4 > input[type="checkbox"]');
    await checks[1].check();
    await checks[0].uncheck();
    // radios
    const radios = await page.$$('div.s4 > input[type="radio"]');
    await radios[1].check();
    await browser.close();
})();