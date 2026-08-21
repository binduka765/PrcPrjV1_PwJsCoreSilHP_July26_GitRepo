import { test, expect } from "@playwright/test";

test("tc1:single file upload test", async ({ page }) => {
  //shold have type = 'file' attribute
  //setInputFiles("filepath") method used to upload the file using the path to file as param

  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );

  await page.locator('#single-file').setInputFiles(["C:\\Users\\binduk\\Documents\\NavsAPItestdata\\newuser2.json"]);

  //await page.waitForTimeout(1000);
  await page.pause();
});

test("tc2:practice testing single file upload test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
});

test("tc3:multiple files upload test", async ({ page }) => {
  //for multiple files upload -- multiple attribute must be present
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );
  await page
    .locator("#multi-file")
    .setInputFiles([
      "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\newuser2.json",
      "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\myuser2.csv",
      "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\price2.csv",
    ]);

  await page.waitForTimeout(2000);
  // await page.pause();
});

test("tc4:type equals to file not present to upload a file test", async ({
  page,
}) => {
  //in case type = file not present then event to be chosen is filechooser
  //the type of file-upload will be FileChooser--use setFiles()
  //type = file attribute is no more a blocker in pw
  //supply BLANK array to remove the files

  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );
  let [fileUpload] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("#custom-upload-btn").click(),
  ]);

  await fileUpload.setFiles([
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\newuser2.json",
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\myuser2.csv",
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\price2.csv",
  ]);

  //await page.waitForTimeout(1000);
  await page.pause();
});

test("tc5:file de-load/remove files test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/file-upload.html",
  );
  let [fileUpload] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("#custom-upload-btn").click(),
  ]);

  await fileUpload.setFiles([
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\newuser2.json",
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\myuser2.csv",
    "C:\\Users\\binduk\\Documents\\NavsAPItestdata\\price2.csv",
  ]);

  await page.waitForTimeout(1000);

  await fileUpload.setFiles([]);

  await page.pause();
});
