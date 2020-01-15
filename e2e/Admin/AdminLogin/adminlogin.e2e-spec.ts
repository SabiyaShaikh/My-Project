import { AppPage } from '../../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';


describe('Admin login', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.adminlogin.navigateTo();
  });

 



// login 

it('Existing Admin should be logged in', async () => {
  await browser.waitForAngularEnabled(false);
  await app.adminlogin.clickAdminBtn();
  await app.adminlogin.setAdminUsername(app.admin[0].adminUsername);
  await app.adminlogin.setAdminPassword(app.admin[0].adminPassword);
  await app.adminlogin.clickAdminLoginBtn();
});

  
  
    

  // afterEach(async () => {
  //   app = new AppPage();
  //   await app.dashboardpage.navigateTo();
  
  // });

});

