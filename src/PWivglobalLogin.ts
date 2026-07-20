
//iife fn:config file is not applicable

import {Browser, Page, chromium, firefox, webkit} from "playwright";

(async ()=>{
    let browser:Browser = await chromium.launch({headless: false, channel:'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('pwbatchtest@open.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pw123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForSelector('img[title="naveenopencart"]');

    await page.context().storageState({path:'storageState.json'});
    await browser.close();


})();