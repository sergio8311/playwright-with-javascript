const {chromium} = require('playwright');

( async() => {

    const browser = await chromium.launch({headless: false, slowMo: 200});
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    const input = await page.$('input');
    await input.click();
    await page.keyboard.type('one does not simply exit vim');
    await page.keyboard.down('Shift');
    Array.from(' exit vim').forEach(async () => await page.keyboard.press('ArrowLeft'));
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(' walk into mordor', {delay: 12});
    //closing browser
    await browser.close();
})();