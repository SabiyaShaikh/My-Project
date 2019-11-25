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
    return element(by.id('mat-input-3'));
  }
  public get AloginBtn(): ElementFinder {
    return element(by.className('btn btn-rounded btn-md btn-primary ml-2 text-uppercase fw-600 ripple animated fadeInLeft'));
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');
  }
}

