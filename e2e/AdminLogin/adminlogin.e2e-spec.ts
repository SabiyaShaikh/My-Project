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
  
    it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.adminBtn)));
    await(app.adminlogin.adminBtn.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Ausername)));
    await(app.adminlogin.Ausername.click());
    await(app.adminlogin.Ausername.sendKeys('curtis.fry@nbs-us.com'));


    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.Apassword)));
    await(app.adminlogin.Apassword.click());
    await(app.adminlogin.Apassword.sendKeys('Navigator1'));

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.AloginBtn)));
    await(app.adminlogin.AloginBtn.click());
  
    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.dropdown)));
    await(app.adminlogin.dropdown.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.AlogoutBtn)));
    await(app.adminlogin.AlogoutBtn.click());

  
  });


  // afterEach(async () => {
  //   app = new AppPage();
  //   await app.dashboardpage.navigateTo();
  
  // });

});

