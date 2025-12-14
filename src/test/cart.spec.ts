import {test, expect} from '../fixtures/testFixtures';
import {config} from '../config/config';

test('ver productos agregados en el carrito', async ({
     loginPage,
     inventoryPage,
     cartPage,
}) => {
    // Login
    await loginPage.goto();
    await loginPage.login(config.user, config.password);

    // Inventory
    await inventoryPage.isLoaded();
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.addSecondProductToCart();
    await inventoryPage.goToCart();

    // Cart
    await cartPage.isLoaded();

    // Asserts
    const itemNames = await cartPage.getItemNames();
    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');

    const itemPrices = await cartPage.getItemPrices();
    expect(itemPrices).toContain(9.99);
    expect(itemPrices).toContain(29.99);
});
