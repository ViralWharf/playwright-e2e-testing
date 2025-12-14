import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(protected page: Page) {
        this.page = page;
    }

    async waitForElementToBeVisible(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }
}