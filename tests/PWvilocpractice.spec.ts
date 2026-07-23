
import {test, expect} from '@playwright/test';

test('tc1:radio,checkbox test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox',{name:'* Password',exact:true}).fill('pw123');

    await page.getByRole('textbox',{name:'Confirm'}).fill('pw123');

    await page.getByRole('radio',{name:'Yes'}).click();

    //await page.getByRole('radio',{name:'No'}).click();

    await page.getByRole('checkbox').check();

    
})

test('tc2:textbox,textarea test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');

    await page.getByRole('checkbox',{name:'Checkbox 3 (+$36.00)'}).click();
    await page.getByRole('checkbox',{name:'Checkbox 4 (+$48.00)'}).click();

    await page.getByRole('textbox',{name:'Text'}).first().fill('binTest');

    let address = `101, NFC
    New Colony,
    South Hyderabad,
    Hyderabad 500045`;
    await page.getByRole('textbox',{name:'Textarea'}).fill(address);





    await page.pause();

    
})

test('tc3: select dr down test', async ({page})=>{
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');

})

test('tc4: file upload btn test', async ({page})=>{
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');

})

test('tc5: date ele test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');
    await page.getByRole('textbox',{name:'* Date',exact:true}).fill('2012-01-01');

    await page.getByRole('textbox',{name:'* Time',exact:true}).first().fill('2021-02-20 22:22');

    await page.getByRole('textbox',{name:'Qty'}).fill('3');

    await page.getByRole('button',{name:'Add to Cart',exact:true}).click();

    await page.pause();

})