//Tab is same as window
//target= _blank => this property means this link will open in new tab
//to handle multiple windows destructure with browser
//Promise.all()---returns Promise<[Page, void]--line 14 returns page, and 15 returns void
//all the promises kept inside the array destructuring
//wait for event states: load | domcontentloaded | networkidle | undefined options?[]--amongst which
//default wait for event state -- always LOAD

import { test, expect, Page } from "@playwright/test";

test("tc1:two window handle-orange hrm test", async ({ browser }) => {
  let ctx = await browser.newContext();
  let page = await ctx.newPage();
  await page.goto("https://orangehrm.com/contact-sales");

  let [childwindowPage] = await Promise.all([
    ctx.waitForEvent("page"), //start listening for the page event in the browser
    page.getByRole("link", { name: "About Us" }).click(), //this will click on the link
  ]);

  await childwindowPage.waitForLoadState();

  let allPages = ctx.pages();
  console.log("total no of pages", allPages.length);

  childwindowPage.bringToFront(); //returns Promise<void>
  console.log("the child window page title:", await childwindowPage.title());

  //close the child window:
  await childwindowPage.close();

  await page.bringToFront(); //focus back to parent window
  console.log("the parent window title: ", await page.title());

  await page.waitForTimeout(5000);
});


//tc2: fails because exceeds 3000ms timeout -- NEEDS A Fix
test("tc2:multiple windows handle-orange hrm test", async ({ browser }) => {
  let ctx = await browser.newContext();
  let page = await ctx.newPage();
  await page.goto("https://orangehrm.com/contact-sales");

  //array of link locators:
  let childrenLinks = [
    page.getByRole("link", { name: "About Us" }),
    page.getByRole("link", { name: "Contact Us" }),
    page.getByRole("link", { name: "Become a Partner" }),
    page.getByRole("link", { name: "Press Releases" }),
  ];

  let childwindowpages: Page[] = []; //0

  //open all 4 child windows:
  for (let link of childrenLinks) {
    let [childwindow] = await Promise.all([
      ctx.waitForEvent("page"),
      link.click(),
    ]);
    await childwindow.waitForLoadState();
    childwindowpages.push(childwindow);
  }

  console.log("total pages: ", ctx.pages().length);

  //go to each and every child window and get the title, close it...
  for (let i = 0; i < childwindowpages.length; i++) {
    let child = childwindowpages[i];
    await child.bringToFront();
    console.log(await child.title());
    await child.waitForTimeout(1000);
    await child.close();
  }
  //back to the parent window: only 1 tab left
  await page.bringToFront();
  console.log("parent window title: ", await page.title());
  console.log("Remaining pages: ", ctx.pages().length);

  //await page.waitForTimeout(5000);
  await page.pause();
});
