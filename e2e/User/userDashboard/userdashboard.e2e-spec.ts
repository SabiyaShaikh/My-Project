import { AppPage } from '../../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';
import { async } from 'q';
import { userDashboard } from './userdashboard.po';

describe('User Dashboard', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.login.navigateTo();
        await app.login.setTenantID(app.users[0].tenantID);
        await app.login.setUsername(app.users[0].username);
        await app.login.setPassword(app.users[0].password);
        await app.login.clickUserLoginBtn();

    });

    // Click on the hamburger icon/menu icon

    it('Verify clicking on Hamburger Icon ', async () => {
        await browser.waitForAngularEnabled(false);
        await (browser.wait(ExpectedConditions.urlContains("/dashboard")));
        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.menu)));
        await (app.userdashboard.menu.click());
        
    });


    // Click on the Inbound option

    it('Click on Inbound section', async () => {

        await browser.waitForAngularEnabled(false);
        await (browser.wait(ExpectedConditions.urlContains("/dashboard?")));

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Inbound)));
        await (app.userdashboard.Inbound.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.InboundRequests)));
        await (app.userdashboard.InboundRequests.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Outbound)));
        await (app.userdashboard.Outbound.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Internal)));
        await (app.userdashboard.Internal.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Production)));
        await (app.userdashboard.Production.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.ItemManagement)));
        await (app.userdashboard.ItemManagement.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.ContainerShipments)));
        await (app.userdashboard.ContainerShipments.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.WarehouseSetup)));
        await (app.userdashboard.WarehouseSetup.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Equipment)));
        await (app.userdashboard.Equipment.click());

        await (browser.wait(ExpectedConditions.visibilityOf(app.userdashboard.Settings)));
        await (app.userdashboard.Settings.click());
        
    });

});
