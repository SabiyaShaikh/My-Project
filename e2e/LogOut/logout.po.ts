import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class LogOut {
  // Elements

  public get dropdown(): ElementFinder {
    return element(by.className('fs-12 mt10 mat-icon notranslate material-icons mat-icon-no-color'));
  }
  public get AlogoutBtn(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[3]'));
  }
}