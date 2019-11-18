
import { DashboardPage } from './Dashboard/dashboardPage.po';
import { LoginPage } from './login/login.po' ;
export class AppPage {

  public dashboard = new DashboardPage();
  public login = new LoginPage();

}
