
import { browser, ExpectedConditions } from "protractor";

import { LoginPage } from './User/login/login.po' ;
import { AdminLogin } from './Admin/AdminLogin/adminlogin.po' ;
import { DashboardPage } from './Admin/DashboardPage/dashboardpage.po';
import { userDashboard} from './User/userDashboard/userdashboard.po';
import { LogOut } from './LogOut/logout.po';
import { ItemManagement } from './User/ItemManagement/itemManagement.po';



export interface AutomationAdmin {
  adminUsername: string;
  adminPassword: string;
}

export interface AutomationUser {
  tenantID: string;
  username: string;
  password: string;
}
export class AppPage {

  public admin: AutomationAdmin[] = [
    { adminUsername: 'curtis.fry@nbs-us.com', adminPassword: 'Navigator1' },
  ];

  public users: AutomationUser[] = [
    { tenantID: 'TC5', username: 't4@tc.com', password: 'w1' },
  ];


  public login = new LoginPage();
  public adminlogin = new AdminLogin();
  public dashboardpage = new DashboardPage();
  public userdashboard = new userDashboard();
  public ItemManagement = new ItemManagement();


  public logout = new LogOut();
  // public productionpage = new DashboardPage();



  // Valid Login for admin
  public validAdminLogin(adminUsernameText, adminPasswordText) {
  browser.wait(ExpectedConditions.visibilityOf(this.adminlogin.adminButton()), 10000);
  this.adminlogin.clickAdminBtn();  
  browser.wait(ExpectedConditions.visibilityOf(this.adminlogin.adminusernameInput()), 10000);
  this.adminlogin.setAdminUsername(adminUsernameText);
  browser.wait(ExpectedConditions.visibilityOf(this.adminlogin.adminpasswordInput()), 10000);
  this.adminlogin.setAdminPassword(adminPasswordText);
  browser.wait(ExpectedConditions.visibilityOf(this.adminlogin.adminLoginBtn()), 10000);
  this.adminlogin.clickAdminLoginBtn();
  }

// Valid login for user

  public validUserLogin(tenantID, usernameText, passwordText) {
    browser.wait(ExpectedConditions.visibilityOf(this.login.tenantInput()), 10000);
    this.login.setTenantID(tenantID);
    browser.wait(ExpectedConditions.visibilityOf(this.login.usernameInput()), 10000);
    this.login.setUsername(usernameText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.passwordInput()), 10000);
    this.login.setPassword(passwordText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.loginButton()), 10000);
    this.login.clickUserLoginBtn();
    }


}
