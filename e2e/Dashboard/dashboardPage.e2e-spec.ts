import { AppPage } from '../app.po';
import { browser, ExpectedConditions } from 'protractor';
import { async } from 'q';

describe('Dashboard Page', () => {
  let app = new AppPage();

  beforeEach(async () => {
    app = new AppPage();
    await app.dashboard.navigateTo();
  });
// only navigates
  it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.toolQaLogo())));
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.id)));
    await(app.dashboard.id.click());
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.username)));
    await(app.dashboard.username.click());
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.pw)));
    await(app.dashboard.pw.click());
  });
});
