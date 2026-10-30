class Cartpage{
    constructor(page){
        this.checkbox = page.locator("//input[@id='termsofservice']")
        this.checkout = page.locator("//button[@id='checkout']")
       
    }
}
export default Cartpage