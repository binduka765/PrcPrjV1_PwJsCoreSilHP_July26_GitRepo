import {test, expect} from '@playwright/test';

test('tc1:alt locator test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByAltText('naveenopencart').highlight();
    await page.waitForTimeout(4000);
    page.getByAltText('naveenopencart').click();

    
})