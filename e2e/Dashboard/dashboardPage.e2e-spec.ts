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
  });
});
