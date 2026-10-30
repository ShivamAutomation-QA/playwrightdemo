class LoginPage{
    constructor(page){
        this.emailTextfield=page.locator("//input[@id='Email']");
        this.passwordTextfield=page.locator("//input[@id='Password']");
        this.submitBtn = page.locator("//input[@value='Log in']")
    }
}
export default LoginPage
