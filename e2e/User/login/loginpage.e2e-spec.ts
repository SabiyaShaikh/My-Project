import { AppPage } from '../../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';


describe('User login with valid credential', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.login.navigateTo();
  });



// login functionality (credentail on app.po page)

it('should log the user in when the user exists', async () => {
  await browser.waitForAngularEnabled(false);
  await app.login.setTenantID(app.users[0].tenantID);
  await app.login.setUsername(app.users[0].username);
  await app.login.setPassword(app.users[0].password);
  await app.login.clickUserLoginBtn();
});
});