import {test, expect} from '@playwright/test';

test('tc1:page loading state test', async ({page})=>{
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', {waitUntil:'load'});



    
})