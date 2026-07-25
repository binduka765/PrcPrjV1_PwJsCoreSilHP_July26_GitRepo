import test from "playwright/test";

test('tc1: eles get attribute values test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   let placeholderVal = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
   console.log(placeholderVal);

   let hrefVal = await page.getByRole('link', { name: 'Forgotten Password' }).getAttribute('href');
   console.log(hrefVal);

    
})


