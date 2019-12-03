import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class LoginPage {
  

  // Elements
 
  public loginUrlPath = '/login';
  public tenantInput = () => element(by.css('input[name="tenant"]'));
  public usernameInput = () => element(by.id('mat-input-0'));
  public passwordInput = () => element(by.id('mat-input-1'));
  public loginButton = () => element(by.className('btn btn-rounded btn-md btn-primary ml-2 text-uppercase fw-600 ripple animated fadeInLeft'));
  
  
  
  public async setTenantID(text: string): Promise<any> {
  const usernameInput = this.tenantInput();
  await usernameInput.click();
  await usernameInput.sendKeys(text);
  }


  public async setUsername(text: string): Promise<any> {
  const usernameInput = this.usernameInput();
  await usernameInput.click();
  await usernameInput.sendKeys(text);
  }

    
  public async setPassword(text: string): Promise<any> {
  const passwordInput = this.passwordInput();
  await passwordInput.click();
  await passwordInput.sendKeys(text);
  }
  

  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/login');

  }

  public async clickUserLoginBtn(): Promise<any> {
    await this.loginButton().click();

  }
}