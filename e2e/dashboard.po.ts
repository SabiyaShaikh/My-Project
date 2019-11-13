import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class Page {
  // Elements

  public dashboardBtn(): ElementFinder {
    return element(by.xpath('//*[@id="main-body"]/div[3]/div[2]/div[1]/div[2]/div[1]/a'));
  }

 

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/#');
  }
}