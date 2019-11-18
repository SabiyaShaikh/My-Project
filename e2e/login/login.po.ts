import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class LoginPage {
  // Elements

  public toolQaLogo(): ElementFinder {
    return element(by.xpath('//*[@id="logo-events"]/a'));
  }

  public get sortable(): ElementFinder {
    return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[1]/a'));
  }
  public get selectable(): ElementFinder {
    return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[2]/a'));
  }
  public get resizable(): ElementFinder {
    return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[3]/a'));
  }
  public get droppable(): ElementFinder {
    return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[4]/a'));
  }
  public get draggable(): ElementFinder {
    return element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[5]/a'));
  }


  // Actions

  public async navigateTo(): Promise<any> {
    return browser.get('/#');
  }
}