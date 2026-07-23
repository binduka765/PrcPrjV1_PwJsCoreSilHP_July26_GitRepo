
import {test, expect} from '@playwright/test';

test('tc1:xpath test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let txt = await page.locator("//h1[text()='Register Account']").textContent();
    console.log(txt);

    let txt2 = await page.locator("//h1[text()='Register Account']").innerText();
    console.log(txt2);

    await page.locator("//input[@id='input-firstname']").fill('binka');

    await page.locator("//input[contains(@id, 'lastname') and contains(@placeholder, 'Last Name') and  @name='lastname']").fill('Karnam');

    await page.locator("//input[starts-with(@id,'input') and @name='firstname']").fill('input12@open.com');

    let txts = await page.locator("//footer//a").allInnerTexts();
    console.log(txts);

    await page.pause();
})