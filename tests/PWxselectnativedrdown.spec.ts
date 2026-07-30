
import {test, expect} from '@playwright/test';

test('tc1: orange hrm select dr down value/label/index test', async ({page})=>{
    await page.goto('https://orangehrm.com/contact-sales');

    await page.waitForTimeout(2000);

    // let currentVal = await page.getByRole('combobox', {name:'Country'}).inputValue();
    // console.log(currentVal);

    await page.getByRole('combobox', {name:'Country'}).selectOption('India');

    await page.waitForTimeout(6000);

    await page.getByRole('combobox', {name:'Country'}).selectOption({label:'Andorra'});

    await page.waitForTimeout(3000);

    await page.getByRole('combobox', {name:'Country'}).selectOption({value:'Argentina'});

    await page.waitForTimeout(3000);

    await page.getByRole('combobox', {name:'Country'}).selectOption({index:10});
    let selectedTxt = await page.getByRole('combobox', {name:'Country'}).inputValue();
    console.log(selectedTxt);

    await page.waitForTimeout(3000);
})

test('tc2: multi select dr down  test', async ({page})=>{
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    await page.locator("select[name='Month']").selectOption(["June","July","February"]);

    await page.waitForTimeout(5000);

})