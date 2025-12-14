import { Page, expect } from '@playwright/test';
import { cartSelectors } from "../utils/selectors";

export class CartPage {
    constructor(private page: Page) {}

    async isLoaded() {
        await expect(
            this.page.locator(cartSelectors.cartContainer)
        ).toBeVisible();
    }

    async goToCheckout() {
        await this.page.click(cartSelectors.checkoutButton);
    }

    async getItemNames(): Promise<string[]> {
        return this.page
            .locator(cartSelectors.itemName)
            .allTextContents();
    }

    async getItemPrices(): Promise<number[]> {
        const pricesText = await this.page
            .locator(cartSelectors.itemPrice)
            .allTextContents();

        return pricesText.map(price =>
            Number(price.replace('$', '').trim())
        );

    }
}
