import {test, expect} from '@playwright/test';

test('tc1:locators test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   //auto enter into the field
  await page.getByRole("textbox", { name: "First Name" }).fill("binka");

  let fieldValueEntered = await page.getByRole("textbox", { name: "First Name" }).inputValue();
  console.log(fieldValueEntered);

    
})