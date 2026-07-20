//SVG:special graphic elements on dom: searchIcon, arrows, location balloon icon,cart icon
//css selector:is supported the normal way
//xpath: regular xpath-not supported - has to be used with local-name()/name()
//local-name() or name()

import { test, expect, Locator } from "@playwright/test";

test("tc1:svg element test", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page
    .getByRole("textbox", { name: "Search for Products, Brands and More" })
    .fill("MacBook Pro");
    // await page
    // .getByRole("button", { name: "Search for Products, Brands and More" })
    // .locator('svg[fill="none"]')
    // .click();
    
    await page
    .getByRole("button", { name: "Search for Products, Brands and More" }).locator("//*[local-name()='svg']").click();

});



test('tc2:pet disease app svg ele test', async ({page})=>{
    await page.goto('https://petdiseasealerts.org/forecast-map#/');

    await page.waitForTimeout(5000);

    let frame = page.frameLocator('iframe[id*="map-instance"]');
    let allRegions: Locator [] = await frame.locator('g.region').all();

    console.log('total no of regions: ', allRegions.length);

    for(let e of allRegions){
      //await e.hover();
      let box = await e.boundingBox();
      let centerX = box!.x + box!.width/2;
      let centerY = box!.y + box!.height/2;

      await page.mouse.move(centerX, centerY);

      let stateName = await e.getAttribute('id');
      console.log(stateName);
      await page.waitForTimeout(50);
    }

    //page.frameLocator('//iframe[id*="map-instance"]');

    //css: to find all 51 states:
    //svg#map-svg g#regions g.region

    //xpath: to find all 51 states:
    //*[local-name()='g' and @id='regions']//*[local-name()='g' and @class='region']

});
