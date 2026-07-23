
import {test, expect} from '@playwright/test';

test('tc1:highlight ele test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: 'First Name'}).highlight();

    await page.pause();

    
})