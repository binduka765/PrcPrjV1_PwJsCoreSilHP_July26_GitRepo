
import { test, expect } from "@playwright/test";

test("tc1:shadow dom element test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

  await page.getByRole('button', {name:'Click Me'}).click();

  await page.waitForTimeout(3000);
});

test("tc2:shadow dom FORM element test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

  await page.getByRole('button', {name:'Click Me'}).click();

  await page.locator('#username').fill('BinAutoGp');
  await page.locator('#email').fill('binka@appmail.com');
  await page.locator('#bio').fill('I am an Automation Engineer');

  await page.getByRole('button', {name:'Submit'}).click();

  await page.waitForTimeout(3000);
});

test("tc3:Two Level shadow dom element test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

  await page.getByRole('button', {name:'Click Me'}).click();

  await page.locator('#username').fill('BinAutoGp');
  await page.locator('#email').fill('binka@appmail.com');
  await page.locator('#bio').fill('I am an Automation Engineer');

  await page.getByRole('button', {name:'Submit'}).click();

  await page.getByRole('textbox', {name: 'Type inside nested shadow...'}).fill('PW is interesting...');

  await page.waitForTimeout(3000);
});

test("tc4:Three Level Deep shadow dom element test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

  await page.getByRole('button', {name:'Click Me'}).click();

  await page.locator('#username').fill('BinAutoGp');
  await page.locator('#email').fill('binka@appmail.com');
  await page.locator('#bio').fill('I am an Automation Engineer');

  await page.getByRole('button', {name:'Submit'}).click();

  await page.getByRole('textbox', {name: 'Type inside nested shadow...'}).fill('PW is interesting...');

  await page.getByRole('button', {name:'Deep Click'}).click();

  await page.waitForTimeout(3000);
});

test("tc5:closed shadow dom element verify-cannot be interacted test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/ui/shadow-dom.html");

  await page.getByRole('button', {name:'Click Me'}).click();

  await page.getByRole('button', {name:'Type in closed shadow...'}).fill('trying to type in closed shadow Dom');
  await page.getByRole('button', {name: 'Verify'}).click();



})