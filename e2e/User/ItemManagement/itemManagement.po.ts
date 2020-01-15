import { browser, by, element, ElementFinder } from 'protractor';
import { relative } from 'path';

export class ItemManagement {
  // Elements


public get Item_Management(): ElementFinder {
    return element(by.xpath('/html[1]/body[1]/app-common-layout[1]/div[1]/div[1]/aside[1]/nav[1]/ul[1]/li[7]/a[1]/span[1]'));
}

public get AllItems(): ElementFinder {
    return element(by.linkText('All Items'));
}

public get items(): ElementFinder {
    return element(by.xpath('00999'));
}


  // Actions
public async navigateTo(): Promise<any> {
    return browser.get('/dashboard');
}
}