// selectors/selectors.ts
export const LoginSelectors = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',

    errorMessage: '[data-test="error"]',
};

// selectors/inventory.selectors.ts
export const inventorySelectors = {
    addToCartBikeLightButton: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    addToCartBackpackButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    shoppingCartLink: '.shopping_cart_link',
    inventoryContainer: '.inventory_list',
};

// selectors/cart.selectors.ts
export const cartSelectors = {
    cartContainer: '.cart_contents_container',
    checkoutButton: 'button:has-text("Checkout")',
    itemName: '.inventory_item_name',
    itemPrice: '.inventory_item_price',
};

export const checkoutSelectors = {
    // Step 1 – Your Information
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    postalCodeInput: '#postal-code',
    continueButton: '#continue',

    // Step 2 – Overview
    finishButton: '#finish',

    // Step 3 – Complete
    completeHeader: '.complete-header',
};

