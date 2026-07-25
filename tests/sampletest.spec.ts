import { test, expect } from "@playwright/test";

test("tc1:locators test", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/checkbox.php");

  
});


test('tc2:locators test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    
})
