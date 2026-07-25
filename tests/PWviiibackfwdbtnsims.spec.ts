

import {test, expect} from '@playwright/test';

test('tc1:back and forward btn simulations test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    console.log(await page.title());

    await page.goto('https://www.google.com');
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());

    await page.goForward();
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());

    await page.reload();
    console.log(await page.title());

    
})