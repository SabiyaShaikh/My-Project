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
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.sortable)));
    await(app.dashboard.sortable.click());
    
    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.selectable)));
    await(app.dashboard.selectable.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.resizable)));
    await(app.dashboard.resizable.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.droppable)));
    await(app.dashboard.droppable.click());

    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboard.draggable)));
    await(app.dashboard.draggable.click());
  });
});
