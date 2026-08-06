import test from "playwright/test";

test("tc1:js alert pop up handle test", async ({ page }) => {

  //listener1:alert -- just accept it
    page.on('dialog', async (popup)=>{
        if(popup.type()==='alert'){
            console.log(popup.message());
            await popup.accept();
        }
    })

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    await page.getByRole('button', {name: 'Log In'}).click();

})