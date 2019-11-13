import { Page } from './dashboard.po';

export interface AutomationUser {
  email: string;
  username?: string;
  password: string;
}

export class AppPage {
  public users: AutomationUser[] = [
    { email: 'nbsqa01', password: 'nbsqa01' },
  ];

  public dashboard = new DashboardPage();
  

  public validLogin(usernameText, passwordText) {
    browser.wait(ExpectedConditions.visibilityOf(this.login.emailInput()), 10000);
    this.login.setEmailText(usernameText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.passwordInput()), 10000);
    this.login.setPasswordText(passwordText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.loginButton()), 10000);
    this.login.clickLoginBtn();
  }


}
