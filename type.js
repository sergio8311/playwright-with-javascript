const {chromium} = require('playwright');

( async() => {

    const browser = await chromium.launch({headless:false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    const email = await page.$('#email');
    await email.type('some_email@gmail.com', {delay: 50}); 
    const submit = await page.$('#form_submit');
    await submit.click();

    browser.close();
})();