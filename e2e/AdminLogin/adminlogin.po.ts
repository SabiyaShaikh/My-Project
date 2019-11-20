import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class AdminLogin {
  // Elements

  
  public get adminBtn(): ElementFinder {
    return element(by.id('mat-tab-label-0-1'));
  }
  public get Ausername(): ElementFinder {
    return element(by.id('mat-input-2'));
  }
  public get Apassword(): ElementFinder {
    return element(by.xpath('mat-input-3"]'));
  }
  public get AloginBtn(): ElementFinder {
    return element(by.xpath('//*[@id="mat-tab-content-0-1"]/div/app-default-login-form/form/div[3]/button'));
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');
  }
}