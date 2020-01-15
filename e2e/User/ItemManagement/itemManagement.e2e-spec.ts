import { AppPage } from '../../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';
import { async } from 'q';
import { ItemManagement } from './itemManagement.po';

fdescribe('Item Management', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.login.navigateTo();
        await app.login.setTenantID(app.users[0].tenantID);
        await app.login.setUsername(app.users[0].username);
        await app.login.setPassword(app.users[0].password);
        await app.login.clickUserLoginBtn();

    });


    // Click on the Itemmanagement option

    it('Click on ItemManagement section', async () => {

        await browser.waitForAngularEnabled(false);
        await (browser.wait(ExpectedConditions.urlContains("/dashboard?")));
        
        await (browser.wait(ExpectedConditions.visibilityOf(app.ItemManagement.Item_Management)));
        await (app.ItemManagement.Item_Management.click());
        
        await (browser.wait(ExpectedConditions.visibilityOf(app.ItemManagement.AllItems)));
        await (app.ItemManagement.AllItems.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.ItemManagement.items)));
        await (app.ItemManagement.items.click());

        
    });

});
