import {test,expect} from "../fixtures/loginFixture.js"
import LoginPage from "../PageObjectModel/LoginPage"
import HomePage from "../PageObjectModel/Homepage"
import loginData from "../TestData/loginData.json"
import Cartpage from "../PageObjectModel/Cartpage"

test("addtocart",async({page,login})=>{

    let lnpage = new LoginPage(page);
    let home = new HomePage(page);
    let cart = new Cartpage(page);
    // let url = loginData.url;
    // let email = loginData.email;
    // let password = loginData.password;

    // await page.goto(url)
    // await page.locator("//a[text()='Log in']").click();
    // await lnpage.emailTextfield.fill(email);
    // await lnpage.passwordTextfield.fill(password);
    // await lnpage.submitBtn.click();
    await home.addTOCART.click();
    await home.cartpage.click();
    await cart.checkbox.click();
    await cart.checkout.click();


})