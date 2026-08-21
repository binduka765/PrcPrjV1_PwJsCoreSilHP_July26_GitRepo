import { test, expect } from "@playwright/test";
import fs from "fs";

test("tc1:file download test into a temp dir", async ({ page }) => {
  //should wait for TRIGGER OF 'DOWNLOAD' EVENT
  await page.goto("https://the-internet.herokuapp.com/download");

  let [filedownload] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "testfile.txt", exact: true }).click(),
  ]);
  //get the file name:
  console.log("file name : ", filedownload.suggestedFilename());

  //await page.pause();
});

test("tc2:file download test into a specific dir-use SAVE AS method", async ({
  page,
}) => {
  //should wait for TRIGGER OF 'DOWNLOAD' EVENT
  await page.goto("https://the-internet.herokuapp.com/download");

  let [filedownload] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "testfile.txt", exact: true }).click(),
  ]);

  //during the download, make sure there is no err during downloading process-verify using expect(await filename.failure()).toBeNULL()
  expect(await filedownload.failure()).toBeNull();
  //get the file name:
  console.log("file name : ", filedownload.suggestedFilename());

  //save to a specific path:
  let filepath = "./downloads/" + filedownload.suggestedFilename();
  await filedownload.saveAs(filepath);
  //await filedownload.saveAs('./downloads/'+filedownload.suggestedFilename());

  //verify the file exists:
  expect(fs.existsSync(filepath)).toBeTruthy();

  //verify the file size:>0
  let fileSize = fs.statSync(filepath).size;
  console.log('file size in bytes: ', fileSize);
  expect(fileSize).toBeGreaterThan(0);

  await page.pause();
});
