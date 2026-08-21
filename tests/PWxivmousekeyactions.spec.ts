import { test, expect } from "@playwright/test";

//mouseactions -- mouse hover, right click, drag N drop,
//technical name for right click - context click/menu

test("tc1:mouse actions:right/context click test--NEEDS FIX AS FAILS", async ({
  page,
}) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  //right clicking action:
  await page
    .getByText("right click me", { exact: true })
    .click({ button: "right" });

  await page.waitForTimeout(1000);

  await page.getByText("Copy", { exact: true }).first().click();

  await page.pause();
});

test("tc2:mouse actions:two level menu/submenu handling test--SPICE JET", async ({
  page,
}) => {
  await page.goto("https://www.spicejet.com/");

  await page.getByText("Travel Policies", { exact: true }).hover();

  await page
    .getByText("Passenger Rights", { exact: true })
    .waitFor({ state: "visible" });

  await page.getByText("Passenger Rights", { exact: true }).click();

  //await page.pause();
});

test("tc3:mouse actions:four level menu/submenu handling test--SPICE JET", async ({
  page,
}) => {
  await page.goto("https://www.bigbasket.com/");

  await page.getByText("Shop by", { exact: true }).nth(1).click();

  //await page.locator('[id="headlessui-menu-button-:Rld956:"]').getByRole('link', {name:'Beverages'}).hover();
  await page
    .locator('[id="headlessui-menu-button-:Rld956:"]')
    .getByText("Beverages", { exact: true })
    .hover();

  //await page.locator('[id="headlessui-menu-button-:Rld956:"]').getByRole('link', {name:'Tea'}).hover();
  await page
    .locator('[id="headlessui-menu-button-:Rld956:"]')
    .getByText("Tea", { exact: true })
    .hover();

  //await page.locator('[id="headlessui-menu-button-:Rld956:"]').getByRole('link', {name:'Green Tea'}).click();
  await page
    .locator('[id="headlessui-menu-button-:Rld956:"]')
    .getByText("Green Tea", { exact: true })
    .click();

  await page.pause();
});

test("tc4:mouse actions: big basket beverages-tea-greentea 2 clicks and 2 hovers test", async ({
  page,
}) => {
  await page.goto("https://www.bigbasket.com/");

  await page.locator('[id="headlessui-menu-button-:Rld956:"]').click();
  await page.getByRole("link", { name: "Green Tea", exact: true }).click();
  await page.getByRole("link", { name: "Green Tea", exact: true }).click();
});

test("tc5:mouse actions:drag N drop test", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");

  const frLoc = page.frameLocator("iframe.demo-frame");

  let src = frLoc.locator("#draggable");
  let target = frLoc.locator("#droppable");

  await src.dragTo(target);

  //await page.pause();
});

test("tc6:key board actions press enter test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  let searchField = page.getByRole("textbox", { name: "Search" });
  await searchField.fill("macbook");

  //press enter:
  await searchField.press("Enter");

  //await page.pause();
});

test("tc7:HW key board actions on loginpage of OCart test", async ({
  page,
}) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let userName = page.getByRole("textbox", { name: "E-Mail Address" });
  let pWord = page.getByRole("textbox", { name: "Password" });

  await userName.fill("DaisyDex@appmail.com");
  await userName.press("Enter");

  await pWord.fill("DaisyDex@123");
  pWord.press("Enter");

  //await page.pause();
});

test("tc8:key board actions- tab sequence @sanitytest", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  let fnField = page.getByRole("textbox", {
    name: "* First Name",
    exact: true,
  });
  await fnField.fill("Shruti");

  await fnField.press("Tab");
  await page.keyboard.type("Devani");

  await page.keyboard.press("Tab");
  await page.keyboard.type("ShrutiDev@open.com");

  await page.keyboard.press("Tab");
  await page.keyboard.type("1112244552");

  await page.keyboard.press("Tab");
  await page.keyboard.type("ShruDev@34");

  await page.keyboard.press("Tab");
  await page.keyboard.type("ShruDev@34");

  await page.keyboard.press("Tab");//No subscribe
  await page.keyboard.press('ArrowRight');//to select Yes for subscrible

  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');

  await page.pause();

  await page.keyboard.press("Tab");//privacy policy

  await page.keyboard.press("Tab");//checkbox
  await page.keyboard.press('Space');//space will click on the checkbox
  await page.keyboard.press('Enter'); //submits the form


  //  await page.keyboard.press("Tab");
  // await page.keyboard.type("");
  //await page.pause();
});
