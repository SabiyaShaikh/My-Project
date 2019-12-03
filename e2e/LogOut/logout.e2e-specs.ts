import { AppPage } from '../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';


describe('Admin login', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.adminlogin.navigateTo();
  });


  
  it('should log the user in when the user exists', async () => {

    await(browser.wait(ExpectedConditions.visibilityOf(app.logout.dropdown)));
    await(app.logout.dropdown.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.adminlogin.AlogoutBtn)));
    await(app.logout.AlogoutBtn.click());

});
});
