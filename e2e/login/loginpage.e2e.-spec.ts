import { AppPage } from '../app.po';
import { browser, ExpectedConditions } from 'protractor';
import { async } from 'q';

describe('login Page', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.login.navigateTo();
  });
// only navigates
  it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.toolQaLogo())));
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.sortable)));
    await(app.login.sortable.click());
    
    await(browser.wait(ExpectedConditions.visibilityOf(app.login.selectable)));
    await(app.login.selectable.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.login.resizable)));
    await(app.login.resizable.click());

  });
});