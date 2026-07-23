
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

 await page.getByRole('link', {name: 'Forgotten Password'}).first().click();

 await page.pause();

});