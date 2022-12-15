class BasePage{
    constructor(page){
        this.page = page;
    }

    async navigate(path){
        await this.page.goto(`https://demo.applitools.com/${path}`);
    }
}
module.exports = BasePage;