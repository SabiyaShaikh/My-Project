
import { LoginPage } from './login/login.po' ;
import { AdminLogin } from './AdminLogin/adminlogin.po' ;
import { DashboardPage } from './DashboardPage/dashboardpage.po';

export class AppPage {

  public login = new LoginPage();
  public adminlogin = new AdminLogin();
  public dashboardpage = new DashboardPage();

}
