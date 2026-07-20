

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

test('tc3:pseudo element on oc reg page test which is asterisk', async ({page})=>{
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
//     })