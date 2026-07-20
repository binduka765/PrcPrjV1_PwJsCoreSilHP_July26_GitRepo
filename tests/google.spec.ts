import { test, expect, chromium } from "@playwright/test";
import { Page } from "playwright";

test("tc1: google title test", async ({ page }) => {
  await page.goto("https:www.google.com");
  let title = await page.title();
  console.log(title);
});

test("tc2: browser destructure to create a newpage execute test", async ({
  browser,
}) => {
  let page: Page = await browser.newPage();
  await page.goto("https://www.google.com");
  let title = await page.title();
  console.log(title);
});

test("tc3:Blank destructure-chromium to launch browser", async ({}) => {
  let browser = await chromium.launch({ channel: "chrome", headless: false });
  let page: Page = await browser.newPage();
  await page.goto("https://www.google.com");
  let title = await page.title();
  console.log(title);
});
