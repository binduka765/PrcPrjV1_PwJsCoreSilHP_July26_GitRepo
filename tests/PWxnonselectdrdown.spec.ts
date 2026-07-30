import { test, expect, Page } from "@playwright/test";

test("tc1:jquery dr down value test", async ({ page }) => {
  await page.goto(
    "https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette",
  );

  //await page.getByRole('textbox', {name:'Select'}).click();--loc not working

  await page.locator("input#justAnInputBox").click();

  //   await page.locator('span.comboTreeItemTitle').filter({hasText:'choice 7'}).first().click();
  selectChoice(page, ['choice 5','choice 4','choice 6 2 2','choice 7']);

  await page.waitForTimeout(6000);
});

//creating generic fn: to select the choice num dynamically
async function selectChoice(page: Page, choice: string[]): Promise<void> {
  for (let ch of choice) {
    await page
      .locator("span.comboTreeItemTitle")
      .filter({ hasText: `${ch}` })
      .first()
      .click();
  }
}
