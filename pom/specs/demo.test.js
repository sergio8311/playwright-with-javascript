const {chromium} = require('playwright');
const HomePage = require('../models/Home.page.js');
const LoginPage = require('../models/Login.page.js')

describe('UI tests for bookstore using palywright', () => {

    jest.setTimeout(30000);
    let browser = null;
    let page = null;
    let context = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async() => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigae();
    });

    afterAll(async() =>{
        await context.close();
        await browser.close();
    });

    it('Should be abel to login', async() => {
        await loginPage.login('username', 'passowrd');
        expect(await page.title()).not.toBeNull();
    });

    it('Should be logged in as Jack Gomez', async() =>{
        expect(await homePage.getUserName()).toBe('Jack Gomez');
    });

    it('Should have total balance of $350', async() =>{
        expect(await homePage.getBalance('total')).toBe('$350');
    });

    test('Should have credit available of $17800', async()=>{
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    });

    test('Should have due today of $180', async()=>{
        expect(await homePage.getBalance('due today')).toBe('$180');
    });
});