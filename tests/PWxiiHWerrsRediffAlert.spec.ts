
import {test, expect} from '@playwright/test';

test('tc5:rediff mail popup test', async ({page})=>{

    // page.on('dialog', async (popup)=>{
    //     if(popup.type()==='alert'){
    //         await popup.accept();
    //     }
    // })

    // //1.Alert: just accept it..
    // page.once('dialog', async (popup)=>{
    //     if(popup.type()==='alert'){
    //         await popup.accept();
    //     }
    // });

    page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    // await page.locator('#login1').fill('');
    // await page.locator('#login1').click();
    // await page.locator('#password').fill('');
    // await page.locator('#password').click();

    await page.getByRole('button', { name: 'Log In' }).click();

    page.on('dialog', async (popup)=>{
        if(popup.type()==='alert'){
            await popup.accept();
        }
    })

    await page.pause();

})