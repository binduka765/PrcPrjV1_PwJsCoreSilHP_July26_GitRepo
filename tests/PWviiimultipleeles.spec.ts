import test, { Locator } from "playwright/test";

test('tc1:locators test', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   //html tag for links <a>
   //images - img
    let allLinks: Locator []=await page.locator('a[href]').all();
    let totalLinks = allLinks.length;

    console.log(totalLinks);

    for(let e of allLinks){
       let txt = await e.innerText();
       let hrefVal = await e.getAttribute('href');
       console.log(txt,":", hrefVal);
    }

    
})

test('tc2:flip kart images test', async ({page})=>{
   await page.goto('https://www.flipkart.com/');

  let allImages: Locator [] = await page.locator('img').all();
  let allImgs = allImages.length;

  console.log(allImgs);

  for(let e of allImages){
    let altVal = e.getAttribute('alt');
    let srcVal = e.getAttribute('src');

    console.log(altVal, ":",srcVal);
  }
    
})
