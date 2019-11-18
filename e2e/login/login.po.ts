import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class LoginPage {
  // Elements

  public loxodoLogo(): ElementFinder {
    return element(by.xpath('/html/body/div[2]/div/div[1]/div/h2/a/img'));
  }

  public get tenantID(): ElementFinder {
    return element(by.xpath('//*[@id="mat-form-field-label-9"]/span[1]"]')); 
  }
  public get username(): ElementFinder {
    return element(by.xpath('//*[@id="mat-input-0"]'));
  }
  public get password(): ElementFinder {
    return element(by.xpath('//*[@id="mat-input-1"]'));
  }
  public get loginBtn(): ElementFinder {
    return element(by.xpath('//*[@id="mat-tab-content-0-0"]/div/app-tenant-login-form/form/div[4]/div/button'));
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');
  }
}