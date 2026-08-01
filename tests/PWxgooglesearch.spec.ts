
import { test, expect } from "@playwright/test";

test("tc1:google search test", async ({ page }) => {
  await page.goto("https://google.com");

  await page.getByRole('combobox',{name:'Search'}).fill('playwright');
  await page.locator('div.wM6W7d span').filter({hasText:'irish pub'}).click();


  await page.waitForTimeout(5000);
  
});


test("tc2:Amazon search test", async ({ page }) => {
  await page.goto("https://www.amazon.com");

  await page.getByRole('searchbox',{name:'Search Amazon'}).fill('macbook');
  // await page.locator('div.s-suggestion.s-suggestion-ellipsis-direction span')
  // .filter({hasText:'charger'}).click();

  await page.getByRole('button',{name:'macbook charger',exact:true}).click();
  
});