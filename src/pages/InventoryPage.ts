import { Page, expect } from '@playwright/test';
import { inventorySelectors } from '../utils/selectors';

export class InventoryPage {
    constructor(private page: Page) {}

    async isLoaded() {
        await expect(
            this.page.locator(inventorySelectors.inventoryContainer)
        ).toBeVisible();
    }

    async addFirstProductToCart() {
        await this.page
            .locator(inventorySelectors.addToCartBikeLightButton)
            .first()
            .click();
    }

    async addSecondProductToCart() {
        await this.page
            .locator(inventorySelectors.addToCartBackpackButton)
            .first()
            .click();
    }

    async goToCart() {
        await this.page.click(inventorySelectors.shoppingCartLink);
    }
}
