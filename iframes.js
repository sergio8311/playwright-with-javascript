const {chromium} = require('playwright');

( async() => {

    const browser = await chromium.launch({headless:false, slowMo: 400});
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/alerts');
    // alerts
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });  
    await page.click('#confirmButton');
   
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text');
    });
    await page.click('#promtButton');
    await browser.close();
})();