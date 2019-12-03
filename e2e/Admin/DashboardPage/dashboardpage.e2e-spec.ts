import { AppPage } from '../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';
import { async } from 'q';

fdescribe('Admin Dashboard', () => {
let app = new AppPage();

        beforeEach(async () => {
            app = new AppPage();
            await app.adminlogin.navigateTo();
            await app.adminlogin.clickAdminBtn();
            await app.adminlogin.setAdminUsername(app.admin[0].adminUsername);
            await app.adminlogin.setAdminPassword(app.admin[0].adminPassword);
            await app.adminlogin.clickAdminLoginBtn();

});      

        // Click on the hamburger icon/menu icon

        it('Click on Hamburger Icon ', async () => {
            await browser.waitForAngularEnabled(false);
            await(browser.wait(ExpectedConditions.urlContains("/dashboard"),10000));
            await(browser.wait(ExpectedConditions.visibilityOf(app.dashboardpage.menuIcon)));
            await(app.dashboardpage.menuIcon.click());                  
        });


        // Click on the tenant option

        it('Click on tenants section', async() => {

            await browser.waitForAngularEnabled(false);
            await(browser.wait(ExpectedConditions.urlContains("/dashboard"),10000));
            
            await(browser.wait(ExpectedConditions.visibilityOf(app.dashboardpage.tenants),10000));
            await(app.dashboardpage.tenants.click());
            
            await(browser.wait(ExpectedConditions.visibilityOf(app.dashboardpage.addTenantbtn), 10000));
            await(app.dashboardpage.addTenantbtn.click());

            
        });

});
