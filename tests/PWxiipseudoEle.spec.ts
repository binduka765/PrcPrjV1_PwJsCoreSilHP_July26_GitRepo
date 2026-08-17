

/**
 * PseudoElement: is a rare/special element available on the DOM to represent mandate eles with asterisk,...
 * --created with the help of pseudo class-::before, ::after, ::hasText...etc on the Dom
 * --on dom represented with ::before, after ... no other attrs available for the pseudo eles(not properly written)
 * --::before is not html tag BUT pseudo class on dom
 * --we need to create one Java script to recognize the pseudo ele - with the method - getComputedStyle() and with Cssselector as
 * param1, and pseudo class as second param
 * 
 * in the window.getComputedStyle()-create the cssselector where exactly this ::before is attached, then as second param pass
 * ::before --on this apply .getPropertyValue(attribute)
 * 
 * window.getComputedStyle(document.querySelector('label[for="input-firstname"]), '::before').getPropertyValue('content');
 * above line gives TypeError
 */
import {test,Page, chromium, Browser,FrameLocator, Frame,Locator} from '@playwright/test';

test('tc1:pseudo element on oc reg page test which is asterisk', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.evaluate(()=>{
        const ele = document.querySelector('label[for="input-firstname"]');
        //return window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content');

        if(ele){

             // Use getComputedStyle only if element exists
            return window.getComputedStyle(ele, '::before').getPropertyValue('content');

        }else{

            return null; // or handle as needed

        }
   
    })
    //await page.pause();

});


test('tc2:Open Cart Reg Page-pseudo ele test-NOT FIXED in sess13', async ({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   let content = await page.evaluate( ()=>{

       return  window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before')
        .getPropertyValue('content');

   });

        console.log(content);

        

        //alert test using evaluate()
        let title = await page.evaluate(()=>{
            alert('hi this is my alert');
            return document.title;
        });

        console.log(title);

        await page.waitForTimeout(5000);

        //reasons:as per chat gpt between this code and below FIXED code
        //         You directly call page.evaluate() with an anonymous function.
        // Inside evaluate(), you directly access the DOM with document.querySelector().
        // You try to get the style of the pseudo-element '::before' directly in the evaluate() function.
        // You do not await page.waitForSelector(), so there's no guarantee the element exists before querying.
        // You do not await page.waitForTimeout(), so it might not pause execution as intended.

    
});

test('tc2:Open Cart Reg Page-pseudo ele test-FIXED', async ({ page }) => {
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

  // Wait for the label element to be present
  const labelHandle = await page.waitForSelector('label[for="input-firstname"]');

  // Evaluate in page context to get the computed style of the pseudo-element
  const content = await page.evaluate((el) => {
    const style = window.getComputedStyle(el, '::before');
    return style.getPropertyValue('content');
  }, labelHandle);

  console.log(content);

  await page.waitForTimeout(5000);
});

test('tc6:open cart product details page cross icom pseudo ele test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart');

    await page.evaluate(()=>{

        const element = document.querySelector("button.btn.btn-danger.btn-xs i");

        if(element){
            return window.getComputedStyle(element,'::before').getPropertyValue("content").charCodeAt(1).toString(16);
        }else{
            return null;
        }

    })

    
});


// await page.evaluate(()=>{
//          const element = window.getComputedStyle(
//         document.querySelector("button.btn.btn-danger.btn-xs i"),
//         "::before"
//     ).getPropertyValue("element");

//      if (element === "none") return null;

//     return element.charCodeAt(1).toString(16);
   //  })