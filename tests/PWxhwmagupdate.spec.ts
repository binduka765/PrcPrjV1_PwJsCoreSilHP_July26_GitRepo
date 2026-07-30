

import { test, expect } from "@playwright/test";

test("tc1:locators test", async ({ page }) => {
  await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

  await page.getByRole('radio',{name:'I do not wish to receive FREE copies of HR Magazine regularly'}).click();

  await page.getByRole('textbox', {name:'Title', exact:true}).fill('Mary');
  await page.getByRole('textbox', {name:'Initials', exact:true}).fill('A');

  await page.getByRole('textbox', {name:'Forename', exact:true}).fill('Alex');
  await page.getByRole('textbox', {name:'Surname', exact:true}).fill('Jane');
  await page.getByRole('textbox', {name:'Internal Routing Code', exact:true}).fill('23234');
  await page.getByRole('textbox', {name:'Direct Email', exact:true}).fill('AlexMary@appmail.com');
  await page.getByRole('textbox', {name:'Direct Telephone', exact:true}).fill('121212121');
  await page.getByRole('textbox', {name:'Job Title', exact:true}).fill('sdet2');
  await page.getByRole('textbox', {name:'Company Name', exact:true}).fill('The Hartford');
  await page.getByRole('textbox', {name:'Address Line 1', exact:true}).fill('76 Gales Drive') ;
  await page.getByRole('textbox', {name:'Address Line 2', exact:true}).fill('south');
  await page.getByRole('textbox', {name:'Address Line 3', exact:true}).fill('street');
  await page.getByRole('textbox', {name:'Town / City', exact:true}).fill('Morris');
  await page.getByRole('textbox', {name:'County / State', exact:true}).fill('Elizabeth');

  await page.locator('select#Contact_CountryCode').selectOption({value:'AS'})
 
  await page.getByRole('textbox', {name:'Postcode / Zipcode'}).fill('11111');
  await page.getByRole('textbox', {name:'Company Telephone Number', exact:true}).fill('5106914376');
  await page.getByRole('textbox', {name:'Company Website'}).fill('app.com');

  await page.locator('select#Question-100034').selectOption({value:'D'});

  await page.locator('select#Question-758').selectOption({value:'HRJF-A'});

  await page.locator('input#Question-875').fill('Manager');

  await page.locator('select#Question-759').selectOption({value:'HRIND-C'});

  await page.locator('input#Question-876').fill('textile');

  await page.locator('input#Question-760-HRDM-A').click();
  await page.locator('input#Question-760-HRDM-E').click();
  await page.locator('input#Question-760-HRDM-L').click();

  await page.locator('input#Question-874').fill('555');

  await page.locator('select#Question-762').selectOption({value:'HRHRE-A'});
  await page.locator('select#Question-763').selectOption({value:'HRBUD-B'});

  await page.locator('input#Question-639').fill('Va');

  //await page.getByRole('link', {name:'Privacy Policy'}).click();

  await page.pause();
  //await page.waitForTimeout(5000);
});