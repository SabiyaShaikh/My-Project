import { AppPage } from '../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';


describe('login Page', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.login.navigateTo();
    


  });
// only navigates
  it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.loxodoLogo())));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.tenantID)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.username)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.password)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.loginBtn)));


  });

  it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.tenantID)));
    await(app.login.tenantID.sendkeys('TC5'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.username)));
    await(app.login.username.sendKeys('t3@tc.com'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.password)));
    await(app.login.password.sendKeys('w1'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.loginBtn)));
    await(app.login.loginBtn.click());


  });

});