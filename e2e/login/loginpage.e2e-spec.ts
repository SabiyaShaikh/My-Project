import { AppPage } from '../app.po';
import { browser, ExpectedConditions } from 'protractor';

describe('login Page', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.login.navigateTo();

  });

  fit('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.loxodoLogo())));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.tenantID)));
    await(app.login.tenantID.sendkeys('abc'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.username)));
    await(app.login.username.sendKeys('myemail@myemail.com'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.password)));
    await(app.login.password.clicksendKeys('mypassword'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.loginBtn)));
    await(app.login.loginBtn.click());


  });

});
