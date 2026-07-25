
import {test, expect} from '@playwright/test';

test.skip('tc1:locators data test id test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    //data-testid -----is mandate
    await page.getByTestId('email-input').fill('binka@open.com');


    //await page.pause();
    
})

test('tc2:locators custom added in pw.config.ts file data test id test', async ({page})=>{
    await page.goto('https://app.hubspot.com/login/');
    //data-test-id -----added in the use object of playwright config file
    await page.getByTestId('email-input-field').fill('binka@appmail.com');


    //await page.pause();
    
})