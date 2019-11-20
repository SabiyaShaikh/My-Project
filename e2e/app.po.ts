
import { LoginPage } from './login/login.po' ;
import { AdminLogin} from './AdminLogin/adminlogin.po' ;

export class AppPage {

  public login = new LoginPage();
  public adminlogin = new AdminLogin();

}
