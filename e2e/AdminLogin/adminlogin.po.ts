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

  public get dropdown(): ElementFinder {
    return element(by.className('fs-12 mt10 mat-icon notranslate material-icons mat-icon-no-color'));
  }
  public get AlogoutBtn(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[3]'));
  }



  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');
  }
}

