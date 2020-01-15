import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class userDashboard {
  // Elements

  
  public get menu(): ElementFinder {
    return element(by.className('mat-icon notranslate material-icons mat-icon-no-color'));
  }


  public get Inbound(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[2]/a[1]'));
  }

  public get InboundRequests(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[2]/ul[1]/li[1]/a[1]'));
  }

  // public get Addbtn(): ElementFinder {
  //   return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/main[1]/app-warehouse-entry-page[1]/app-inbound-requests-page[1]/div[1]/div[3]/div[1]/div[2]/div[1]/button[2]'));
  // }

  // public get CrossIcon(): ElementFinder {
  //   return element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-add-inbound[1]/form[1]/mat-dialog-actions[1]/button[1]'));
  // }

  public get Outbound(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[3]/a[1]'));
  }

  public get Internal(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[4]/a[1]'));
  }

  public get Production(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[5]/a[1]'));
  }

  public get ContainerShipments(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[6]/a[1]'));
  }

  public get ItemManagement(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[7]/a[1]'));
  }

  public get WarehouseSetup(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[8]/a[1]'));
  }
  
  public get Equipment(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[9]/a[1]'));
  }

  public get Settings(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/main[1]/app-items-page[1]/div[1]/div[3]/div[1]/button[2]/span[1]/mat-icon[1]'));
  }


  
  // Actions
  public async navigateTo(): Promise<any> {
    return browser.get('/dashboard');
  }
}