import {test as base,expect} from "@playwright/test"
import loginData from "../TestData/loginData.json"
import LoginPage from "../PageObjectModel/LoginPage"

const test = base.extend({

    login: async({page},use)=>{

        console.log('set up');

         //Launch application
         await page.goto(`${process.env.Base_url}`)
         // clicking on login link
         await page.locator("//a[text()='Log in']").click();

         let lnpage = new LoginPage(page);

         await lnpage.emailTextfield.fill(`${process.env.email}`);
         await lnpage.passwordTextfield.fill(`${process.env.password}`);
         await lnpage.submitBtn.click();


         await use(page);
    }
})
export {test}