import { AppPage } from '../app.po';
import { browser, ExpectedConditions, Ptor } from 'protractor';

describe('Admin Dashboard', () => {
let app = new AppPage();

beforeEach(async () => {
    app = new AppPage();
    await app.dashboardpage.navigateTo();

});

// only navigates
it('Only navigates', async () => {
    await browser.waitForAngularEnabled(false);

    await(browser.wait(ExpectedConditions.visibilityOf(app.dashboardpage.tasks)));
    await(app.dashboardpage.tasks.click());

});
});
