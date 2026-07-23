
import {test, expect} from '@playwright/test';

test('tc1:css selectors test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('input#input-firstname').fill('veniKa');

    await page.locator('#input-lastname').fill('kaluvakunta');

    await page.locator("input[name='email']").fill('veni@open.com');

    await page.locator("input[placeholder='Telephone']").fill('5105629344');

    await page.locator("input[type='password'][name='password']").fill('pw123');

    await page.locator("input[name='confirm']").fill('pw123');



    
})