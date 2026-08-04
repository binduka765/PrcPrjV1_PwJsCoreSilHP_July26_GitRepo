
import { test, expect, FrameLocator, Frame } from "@playwright/test";

test("tc1: vehicle registration iframe ele test", async ({ page }) => {
  await page.goto("https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/");

  await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

  //iframe DOM
  let frameLoc:FrameLocator = page.frameLocator('#frame-one748593425');//framelocator element
  // page.frameLocator("iframe[name='__uspapiLocator']");//framelocator element

  await frameLoc.getByRole('textbox',{name:'Proposal title *',exact:true}).fill('mytitle');

  await frameLoc.getByRole('textbox',{name: 'Location'}).fill('Connecticut');

  await frameLoc.getByRole('textbox',{name:'First Name *',exact:true}).fill('Smoke');
  await frameLoc.getByRole('textbox',{name:'Last Name *',exact:true}).fill('Karnam');

  await frameLoc.getByRole('textbox',{name:'Street Address *',exact:true}).fill('24 Gales Dr');
  await frameLoc.getByRole('textbox',{name:'Address Line 2'}).fill('South Street');
  await frameLoc.getByRole('textbox',{name:'City *',exact:true}).fill('New Providence');

  await frameLoc.getByRole('combobox',{name:'State *',exact:true}).selectOption('Connecticut');

  await frameLoc.getByRole('textbox',{name: 'Zip Code *',exact:true}).fill('07974');
  await frameLoc.getByRole('textbox',{name: 'Phone Number *',exact:true}).fill('9083477342');
  await frameLoc.getByRole('textbox',{name:'Email Address *',exact:true}).fill('SmokeKar@open.com');

  await frameLoc.locator("input[type='submit']").click();
  
  //to check the control is on parent
  let headerMainPage = await page.locator('h3.details__form-preview-title').innerText();
  console.log(headerMainPage);

  await page.waitForTimeout(4000);
});

test('tc2:london freelance frame element test', async ({page})=>{
   await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

   let frameLoc:FrameLocator = page.frameLocator('frame[name="main"]');
   let headerTxt = await frameLoc.getByRole('heading', {name:'Title bar (top.html)',level:2}).innerText();
   console.log(headerTxt);

   let footerFrame:FrameLocator = page.frameLocator('frame[name="bot"]');
   let footerTxt = await footerFrame.getByRole('heading', {name:'Footer (bot.html)',level:2}).innerText();
   console.log(footerTxt);

   await page.waitForTimeout(4000); 
})

test('tc3:london freelance total frames test', async ({page})=>{
   await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

   let allFrames:Frame [] = page.frames();
   let frLength = allFrames.length;
   console.log(frLength);


   for(let fr of allFrames){
    let frName = fr.name();
    let frUrl = fr.url();
    console.log(frName +":"+ frUrl);
   }

})

test('tc4:nested frames dexland test', async ({page})=>{
   await page.goto('https://www.dezlearn.com/nested-iframes-example/');

   let parentFr = page.frameLocator('iframe#parent_iframe');
   await parentFr.getByRole('button', {name:'Click Here'}).click();
   let outerFrMesg = await parentFr.locator('p#processing').innerText();
   console.log(outerFrMesg);

   let childFr =  parentFr.frameLocator('iframe#iframe1');

   await childFr.getByRole('button', {name:'Click Here'}).click();
   let innerFrMesg = await childFr.locator('p#processing').innerText();
   console.log(innerFrMesg);


  //  await page.frameLocator('iframe#parent_iframe')
  //   .frameLocator('iframe#iframe1')
  //     .getByRole('button', {name:'Click Here'}).click();

    await page.waitForTimeout(4000);
})