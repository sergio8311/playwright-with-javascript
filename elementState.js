const {chromium} = require('playwright');

( async() => {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = await page.$('#firstName');
    const lastName = await page.$('#lastName');
    const sportsCheckbox = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log("First name is disabled: " + await firstName.isDisabled());
    console.log("First name is enabled: " + await firstName.isEnabled());
    console.log(`First name is editable: ${await firstName.isEditable()}`);

    console.log(`Sports checkbox is checked: ${await sportsCheckbox.isChecked()}`);
    console.log(await sportsCheckbox.isVisible());
    console.log(await sportsCheckbox.isHidden());

    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());
    //closing browser
    await browser.close();
})();