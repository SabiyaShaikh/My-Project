import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class userDashboard {
  // Elements

  
  public get menuIcon(): ElementFinder {
    return element(by.xpath('//*[@id="wrapper"]/app-common-header/mat-toolbar/div[1]/div/button'));
  }
  
    
  public get tenants(): ElementFinder {
    return element(by.css('ng-star-inserted'))
  }

  public get addTenantbtn(): ElementFinder {
    return element(by.className('fs-14 fw-500 letter-space'));
  }

  // Actions
  public async navigateTo(): Promise<any> {
    return browser.get('/dashboard');
  }
}