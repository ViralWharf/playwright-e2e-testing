import { test as base, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }: { page: Page }, use: (loginPage: LoginPage) => Promise<void>) => {
        const login = new LoginPage(page);
        await use(login);
    },

    inventoryPage: async ({ page }: { page: Page }, use: (inventoryPage: InventoryPage) => Promise<void>) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({ page }: { page: Page }, use: (cartPage: CartPage) => Promise<void>)=> {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }: { page: Page }, use: (checkoutPage: CheckoutPage) => Promise<void>)=> {
        await use(new CheckoutPage(page));
    },
});

export { expect };
