
import { test, expect, Page } from "@playwright/test";
import { ALL } from "node:dns";

test("tc1:jquery dr down value test", async ({ page }) => {
  await page.goto(
    "https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette",
  );

  

  await page.locator("input#justAnInputBox").click();

  selectAllChoices(page);

  await page.waitForTimeout(3000);

});

async function selectAllChoices(page: Page): Promise<void> {
  // Locate all options
  const allOptions =  await page.locator("span.comboTreeItemTitle").allInnerTexts();
  console.log(allOptions);
  
  //const count = await options.count();

    for (let ch of allOptions) {
    await page
      .locator("span.comboTreeItemTitle")
      .filter({ hasText: `${ch}` })
      .first()
      .click();
  }

 
}