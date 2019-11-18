import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class DashboardPage {
  // Elements

  public toolQaLogo(): ElementFinder {
    return element(by.xpath('//*[@id="logo-events"]/a'));
  }

  public get id(): ElementFinder {
    return element(by.xpath('//*[@id="mat-input-4"]'));
  }
  public get username(): ElementFinder {
    return element(by.xpath('//*[@id="mat-input-0"]'));
  }
  public get pw(): ElementFinder {
    return element(by.xpath('//*[@id="mat-input-1"]'));
  }
  // public get loginbtn(): ElementFinder {
  //   return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[4]/a'));
  // }
  // public get draggable(): ElementFinder {
  //   return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[5]/a'));
  // }


  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/#');
  }
}