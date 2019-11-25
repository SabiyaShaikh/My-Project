import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class LoginPage {
  // Elements

  public loxodoLogo(): ElementFinder {
    return element(by.className('logo-login animated fadeInDown'));
  }

  public get tenantID(): ElementFinder {
    return element(by.className('form-controlX mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid')); 
  }
  public get username(): ElementFinder {
    return element(by.id('mat-input-0'));
  }
  public get password(): ElementFinder {
    return element(by.id('mat-input-1'));
  }
  public get loginBtn(): ElementFinder {
    return element(by.className('btn btn-rounded btn-md btn-primary ml-2 text-uppercase fw-600 ripple animated fadeInLeft'));
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');
  }
}