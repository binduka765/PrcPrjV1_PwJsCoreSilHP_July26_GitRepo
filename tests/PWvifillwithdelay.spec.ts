
import {test, expect} from '@playwright/test';

test('tc1:fill with delay test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name:'First Name'}).pressSequentially('Bin Auto Group', {delay:1000});

})