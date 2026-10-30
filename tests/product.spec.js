import {test} from "@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import HomePage from "../PageObjectModel/Homepage"
import loginData from "../TestData/loginData.json"

test("click on a product",async({page})=>{

    let lnpage = new LoginPage(page);
    let home = new HomePage(page);
    let url = loginData.url;
    let email = loginData.email;
    let password = loginData.password;

    await page.goto(url)
    await page.locator("//a[text()='Log in']").click();
    await lnpage.emailTextfield.fill(email);
    await lnpage.passwordTextfield.fill(password);
    await lnpage.submitBtn.click();

    await home.product.click();

})