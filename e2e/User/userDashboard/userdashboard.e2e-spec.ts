import { AppPage } from '.app';
import { browser, ExpectedConditions, Ptor } from 'protractor';
import { async } from 'q';

fdescribe('User Dashboard', () => {
let app = new AppPage();

        beforeEach(async () => {
            app = new AppPage();
            await app.login.navigateTo();
            await app.login.setTenantID(app.User[0].tenant);
            await app.login.setAdminUsername(app.User[0].Username);
            await app.login.setAdminPassword(app.User[0].Password);
            await app.login.clickAdminLoginBtn();

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
