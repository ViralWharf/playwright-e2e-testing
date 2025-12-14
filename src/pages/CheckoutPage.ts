import { Page, expect } from '@playwright/test';
import { checkoutSelectors } from "../utils/selectors";

export class CheckoutPage {
    constructor(private page: Page) {}

    async fillInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page.fill(checkoutSelectors.firstNameInput, firstName);
        await this.page.fill(checkoutSelectors.lastNameInput, lastName);
        await this.page.fill(checkoutSelectors.postalCodeInput, postalCode);
        await this.page.click(checkoutSelectors.continueButton);
    }

    async finishCheckout() {
        await this.page.click(checkoutSelectors.finishButton);
    }

    async isCompleted() {
        await expect(
            this.page.locator(checkoutSelectors.completeHeader)
        ).toBeVisible();
    }
}
