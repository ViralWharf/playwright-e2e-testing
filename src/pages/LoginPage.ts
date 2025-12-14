import { type Page, expect } from '@playwright/test';
import { config } from '../config/config';
import { BasePage } from './BasePage';
import { LoginSelectors } from '../utils/selectors';

export class LoginPage extends BasePage{
    constructor(private page: Page) {super(page)}

    async goto() {
        await this.page.goto(config.url);
        await this.page.waitForLoadState('networkidle');
    }

    async login(username: string, password: string) {
        await this.waitForElementToBeVisible(LoginSelectors.usernameInput);
        await this.page.fill(LoginSelectors.usernameInput, username);

        await this.page.waitForSelector(LoginSelectors.passwordInput, { state: 'visible' });
        await this.page.fill(LoginSelectors.passwordInput, password);

        await this.page.click(LoginSelectors.loginButton);
    }

    get errorMessage() {
        return this.page.locator('.error-message-container');
    }
}
