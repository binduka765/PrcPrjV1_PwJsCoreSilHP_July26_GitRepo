
import { test, expect, Locator } from "@playwright/test";

test("tc1:flipkart svg search ele test", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  await page.getByRole('textbox', {name:'Search for Products, Brands and More'}).fill('tupperware')

  //getByRole + cssLocator and click 
  //await page.getByRole('button', {name:'Search Icon'}).locator("svg[fill='none']").click();

  //getByRole + specialxpathstrategy and click on searchicon
    await page.getByRole('button', {name:'Search for Products, Brands and More'}).locator('//*[local-name()="svg"]').click();
  
});

test("tc2:pet disease svg Graph Ele search ele test", async ({ page }) => {
  await page.goto("https://petdiseasealerts.org/forecast-map#/");

  await page.waitForTimeout(5000);

  let frameLoc = page.frameLocator('//iframe[contains(@id,"map-instance-")]');

  let allStates :Locator[]= await frameLoc.locator('svg#map-svg g#regions g.region').all();//returns loc array
  console.log(allStates.length);
  //css: svg#map-svg g#regions g.region
  //xpath: //*[local-name()="g" and @class="region"]

  for(let reg of allStates){
   // await reg.hover();
    let box = await reg.boundingBox();
    let centerX = box!.x + box!.width/2;
    let centerY = box!.y + box!.height/2;
    await page.mouse.move(centerX, centerY);
    
    let stateName = await reg.getAttribute('id');
    console.log(stateName);
  }

  await page.waitForTimeout(2000);

  //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content');
});

test('tc3:pseudo element test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   await page.evaluate(()=>{
    return window.getComputedStyle(document.querySelector('label[for="input-firstname"]'),'::before').getPropertyValue('content');
   })

   await page.waitForTimeout(2000); 
})