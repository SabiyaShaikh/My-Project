import { AppPage } from '../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';


describe('Admin login', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.login.navigateTo();
    


  });
// only navigates
  it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.adminBtn)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Ausername)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Apassword)));
    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.AloginBtn)));


  });

  fit('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.adminBtn)));
    await(app.adminlogin.adminBtn.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Ausername)));
    await(app.adminlogin.Ausername.sendKeys('curtis.fry@nbs-us.com'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Apassword)));
    await(app.adminlogin.Apassword.sendKeys('Navigator1'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.AloginBtn)));
    await(app.adminlogin.AloginBtn.click());


  });

});