
import { test, expect } from "@playwright/test";

test("tc1:js alert pop up handle test", async ({ page }) => {

  //listener1:alert -- just accept it
    page.on('dialog', async (popup)=>{
        if(popup.type()==='alert'){
            console.log(popup.message());
            await popup.accept();
        }
    })

    //listener2:Confirm - just accept it
      page.on('dialog', async (popup)=>{
        if(popup.type()==='confirm'){
             console.log(popup.message());
            await popup.accept();
        }
    })

    //listener3: prompt - just click on ok
      page.on('dialog', async (popup)=>{
        if(popup.type()==='prompt'){
             console.log(popup.message());
            await popup.accept('Bin Auto Group');
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //alert clicking
    await page.getByRole('button', {name:'Click for JS Alert'}).click();
    await page.waitForTimeout(3000);

    //confirm clicking
    await page.getByRole('button', {name:'Click for JS Confirm'}).click();
    await page.waitForTimeout(3000);

    //prompt clicking
    await page.getByRole('button', {name:'Click for JS Confirm'}).click();
    await page.waitForTimeout(3000);

  await page.waitForTimeout(5000);
});