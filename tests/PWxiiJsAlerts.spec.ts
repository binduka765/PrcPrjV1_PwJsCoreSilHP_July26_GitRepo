
import {test, Page} from '@playwright/test';

test('tc4:js alert pop ups handle test', async ({page})=>{
    //creating 3 listeners for 3 diff pop ups:alert, confirm, prompt - popups

    //1.Alert: just accept it..
    page.on('dialog', async (popup)=>{
        if(popup.type()==='alert'){
            await popup.accept();
        }
    });

    //2.Confirm: just accept/dismiss it..
    page.on('dialog', async (popup)=>{
        if(popup.type()==='confirm'){
            //await popup.accept();
            await popup.dismiss();
        }
    });

    //3.Prompt: just accept it..
    page.on('dialog', async (popup)=>{
        if(popup.type()==='prompt'){
            await popup.accept('binka');
           
        }
    });

    page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    await page.pause();
})