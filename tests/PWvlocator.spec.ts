import { test, Page, chromium, Browser } from "@playwright/test";

test("tc1:register page test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  let fn = page.getByRole("textbox", { name: "First Name" });
  await fn.fill('binka')
  let ln = page.getByRole('textbox', {name: "Last Name"});
  await ln.fill('Karnam');
  let mail = page.getByRole('textbox', {name: "E-Mail"});
  await mail.fill('binka@appmail.com');

  let continueBtn = page.getByRole('button', {name: "Continue"});
  await continueBtn.click();

  await page.pause();
});
