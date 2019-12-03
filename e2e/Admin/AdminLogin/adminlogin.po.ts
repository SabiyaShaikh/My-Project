import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class AdminLogin {
  public loginUrlPath = '/login';
  public adminButton = () => element(by.id('mat-tab-label-0-1'));
  public adminusernameInput = () => element(by.id('mat-input-2'));
  public adminpasswordInput = () => element(by.id('mat-input-3'));
  public adminLoginBtn = () => element(by.className('btn btn-rounded btn-md btn-primary ml-2 text-uppercase fw-600 ripple animated fadeInLeft'));
  // Elements

  



  public async clickAdminBtn(): Promise<any> {
    await this.adminButton().click();
  }

public async setAdminUsername(text: string): Promise<any> {
    const usernameInput = this.adminusernameInput();
    await usernameInput.click();
    await usernameInput.sendKeys(text);
  }

public async setAdminPassword(text: string): Promise<any> {
    const passwordInput = this.adminpasswordInput();
    await passwordInput.click();
    await passwordInput.sendKeys(text);
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');

  }

  public async clickAdminLoginBtn(): Promise<any> {
    await this.adminLoginBtn().click();

  }
}

