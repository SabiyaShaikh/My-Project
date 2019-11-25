import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class DashboardPage {
  // Elements

  
  public get tasks(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/main[1]/app-dashboard-entry-page[1]/app-dashboard-page[1]/div[1]/div[2]/mat-button-toggle-group[1]/mat-button-toggle[2]'));
  }


  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/dashboard');
  }
}