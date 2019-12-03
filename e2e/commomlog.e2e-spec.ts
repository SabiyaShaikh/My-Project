import { browser, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';

describe('Login Page', () => {
let app: AppPage;

beforeEach(async () => {
    app = new AppPage();
    await app.adminlogin.navigateTo();
});

//login with valid admin credential

it('should log the user in when the user exists', async () => {
    await browser.waitForAngularEnabled(false);
    await app.adminlogin.clickAdminBtn();
    await app.adminlogin.setAdminUsername(app.admin[0].adminUsername);
    await app.adminlogin.setAdminPassword(app.admin[0].adminPassword);
    await app.adminlogin.clickAdminLoginBtn();
});




it('should log the user in when the user exists', async () => {
    await browser.waitForAngularEnabled(false);
    await app.login.setTenantID(app.users[0].tenantID);
    await app.login.setUsername(app.users[0].username);
    await app.login.setPassword(app.users[0].password);
    await app.login.clickUserLoginBtn();
});


});