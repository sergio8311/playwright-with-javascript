const {chromium} = require('playwright');

describe('UI tests for bookstore using palywright', () => {

    let browser = null;
    let page = null;
    let context = null;
    let firstRowCells = null;

    beforeAll(async() => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demoqa.com/books');

    });

    afterAll(async() =>{
        await context.close();
        //closing browser
        await browser.close();
    });

    test('Should load page', async() => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test('Should be able to search for eloquent javascript', async() =>{
        await page.fill('#searchBox', 'eloquent');
    });

    test('Should check if book image is okay', async() =>{
        firstRowCells = await page.$$('.ReactTable div:nth-child(1) > .rt-tr > .rt-td');
        let imgUrl = await firstRowCells[0].$('img');
        expect(await imgUrl.getAttribute('src')).toBe('/images/bookimage0.jpg');
    });

    test('Should check if title is okay', async()=>{
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test('Should check if author is okay', async()=>{
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test('Should check if publisher is okay', async()=>{
        expect(await firstRowCells[3].innerText()).toBe('No Starch Press');
    });
});
