import test, { Locator } from "playwright/test";

test("tc1:print all texts test", async ({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  let texts:string[] = await page.locator('//a[@href]').allInnerTexts();

  //console.log(texts);

  for(let e of texts){
    console.log(e);
    //await page.pause();
  }

});

test('tc2:HW Print oc register page links test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   let linkItems:Locator [] = await page.locator('a.list-group-item').all();

   let linksCount = linkItems.length;
   console.log(linksCount);

   for(let e of linkItems){
     let txt = await e.innerText();
     console.log(txt);
   }

    
})