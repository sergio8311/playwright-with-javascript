const {chromium} = require('playwright');

( async() => {

    const browser = await chromium.launch({headless:false, slowMo: 400});
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = await page.$('#dropdown');
    // value
    await dropdown.selectOption({value: '1'});
    // label
    await dropdown.selectOption({label: 'Option 2'});
    //index
    await dropdown.selectOption({index: 1});
    //values inside the selection
    const availableOptions = await dropdown.$$('option');
    availableOptions.forEach(async option => console.log( await option.innerText()));

    for (let i = 0; i < availableOptions.length; i++){
        console.log(await availableOptions[i].innerText());
    }

    browser.close();
})();