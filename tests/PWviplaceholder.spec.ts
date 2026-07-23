import { test, expect } from "@playwright/test";

test("tc1:ele with placeholder test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  await page.getByPlaceholder("First Name").fill("binka");
  await page.getByPlaceholder("Last Name").fill("kar");

  await page.getByPlaceholder("E-Mail").fill("binka@open.com");
  await page.getByPlaceholder("Telephone").fill("999966655");

  await page.getByPlaceholder('Password',{exact:true}).fill("kar");
  await page.getByPlaceholder('Password Confirm',{exact:true}).fill("kar");

  await page.pause();

});
