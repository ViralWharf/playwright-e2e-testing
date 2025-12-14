import { test, expect } from '../fixtures/testFixtures';
import { config } from '../config/config';

test('completar compra exitosamente', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
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
    await cartPage.goToCheckout();

    // Checkout
    await checkoutPage.fillInformation(
        'NombrePrueba',
        'ApellidoPrueba',
        '110111'
    );

    await checkoutPage.finishCheckout();
    await checkoutPage.isCompleted();
});
