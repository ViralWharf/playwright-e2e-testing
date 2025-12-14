import { test, expect } from '../fixtures/testFixtures';
import { config } from '../config/config';
import { inventorySelectors } from '../utils/selectors';

test('login exitoso', async ({ loginPage, page}) => {
    await loginPage.goto();
    await loginPage.login(config.user, config.password);

    await expect(page).toHaveURL(config.url + config.inventory);

    await expect(page.locator(inventorySelectors.inventoryContainer)).toBeVisible();
});

test('login fallido', async ({ loginPage, page}) => {
    await loginPage.goto();
    await loginPage.login(config.invalidUser, config.invalidPassword);

    await expect(page).toHaveURL(config.url);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface');
});