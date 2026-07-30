import test, { Locator } from "playwright/test";

test('tc1:locator chain test-filling registration form', async ({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   await page.locator('form').getByRole('textbox',{name:'First Name'}).fill('smoky');
   await page.locator('form').getByRole('textbox',{name:'Last Name'}).fill('Karnam');
   await page.locator('form').getByRole('textbox',{name:'E-Mail'}).fill('smokyKa@appmail.com');
   await page.locator('form').getByRole('textbox',{name:'Telephone'}).fill('5103248754');

   await page.locator('form').getByRole('textbox',{name:'* Password', exact:true}).fill('pw999');
   await page.locator('form').getByRole('textbox',{name:'Password Confirm'}).fill('pw999');

   await page.locator('form').getByRole('radio',{name:'Yes'}).click();

   await page.locator('div.pull-right').getByRole('button',{name:'Continue'}).click();


    await page.waitForTimeout(2000);
    
})

test('tc2: finding column right links-using chain locator', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // let loginEle = page.locator('#column-right').getByRole('link',{name:'Login'});
    // await loginEle.click();

    await page.locator('#column-right').getByRole('link',{name:'Login'}).click();

    let currPageTitle = await page.title();
    console.log(currPageTitle);

     await page.waitForTimeout(2000);
})

test('tc3:webtable checkbox click test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page.locator('#table01')
    .locator('tr')
    .filter({hasText:'Coded UI'})
    .getByRole('checkbox')
    .click();

    await page.waitForTimeout(2000);
})

test('tc:3b checkbox click test using parent sibling xpath loc test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');
    await page.locator("//a[text()='Selenium']//parent::td//ancestor::tr/child::td/input[@type='checkbox']").click();

    await page.waitForTimeout(5000);
})

test('tc4:webtable Delete Btn click test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page.locator('#table01')
    .locator('tr')
    .filter({hasText:'Coded UI'})
    .getByRole('button',{name:'Delete'})
    .click();

    await page.waitForTimeout(2000);
})

test('tc5:webtable Delete Btn click test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let age = await page.locator('#table02')
    .locator('tr')
    .filter({hasText:'Ashton Cox'})
    .getByText('66',{exact:true})
    .innerText();

    console.log(age);

    await page.waitForTimeout(2000);
})

test('tc6: webtable user data test', async ({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');
    let userData:string [] = await page.locator('#table02').locator('tr')
    .filter({hasText:'Ashton Cox'}).allInnerTexts();

    for(let e of userData){
        console.log(e);
    }

})

test('tc7: webtable 02 headers list test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');
    let allHeaders = await page.locator('#table02 tr th').allInnerTexts();
    console.log(allHeaders);
})

test('tc8: webtable rows and columns count test', async ({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');
    const rowCount = await page.locator('#table02 tr').count();
    const columnCount = await page.locator('#table02 th').count();
    console.log(rowCount, ':',columnCount);
})

test('tc9: webtable cricinfo data test-POP UP BLOCKING-NEED TO FIX', async ({page})=>{
    await page.goto('https://www.cricinfo.com/series/lanka-premier-league-2026-1537330/kandy-royals-vs-galle-gallants-16th-match-1537346/full-scorecard');

  let wktTakerName =  page.locator('table.ci-scorecard-table').last()
                    .locator('tr').filter({hasText:'Wanindu Hasaranga'}).first()
                    .locator('td').nth(1).locator('span').last();

    console.log(wktTakerName);

    await page.waitForTimeout(5000);
})

test('tc10: webtable cricinfo score card fetch', async ({page})=>{
    await page.goto('https://www.cricinfo.com/series/lanka-premier-league-2026-1537330/kandy-royals-vs-galle-gallants-16th-match-1537346/full-scorecard');

  let scoreCardData =  page.locator('table.ci-scorecard-table').last()
                    .locator('tr').filter({hasText:'Wanindu Hasaranga'}).first()
                    .locator('td').nth(2).all();

    console.log(scoreCardData);

    await page.waitForTimeout(5000);
})

test('tc11: w3schools web table customers info test', async ({page})=>{
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    const allTexts = await page.locator('table#customers').first().allInnerTexts();

    for(let e of allTexts){
        console.log(e);
    }
})

test('tc12: w3schools web table customers headers list test', async ({page})=>{
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    const allHeaderTexts = await page.locator('table#customers').first().locator('th').allInnerTexts();

    for(let e of allHeaderTexts){
        console.log(e);
    }
})

test("tc13:click all check boxes NAL app test", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/checkbox.php");

  
});



