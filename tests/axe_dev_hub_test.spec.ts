// import { test, expect } from "./fixtures";
import { test, expect } from '@playwright/test';

test.describe('Main Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.playwright.dev');
    });

    test('find Get Started Button', async ({ page }) => {
        await page.getByRole('link', { name: 'Get Started' }).isVisible();
    });

    test.describe('find images with specific alt text', () => {
        test('find VS Code', async ({ page }) => {
            await page.getByAltText('VS Code').isVisible();
        });
        test('find Bing', async ({ page }) => {
            await page.getByAltText('Bing').isVisible();
        });
        test('find Outlook', async ({ page }) => {
            await page.getByAltText('Outlook').isVisible();
        });
    })
});