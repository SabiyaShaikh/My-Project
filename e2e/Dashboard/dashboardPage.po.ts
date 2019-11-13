import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class DashboardPage {
  // Elements

  public toolQaLogo(): ElementFinder {
    return element(by.xpath('//*[@id="logo-events"]/a'));
  }


  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/#');
  }
}