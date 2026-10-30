class HomePage{
    constructor(page){
        this.product=page.locator("//a[text()='14.1-inch Laptop']"); 
        this.addTOCART = page.locator("(//input[@class='button-2 product-box-add-to-cart-button'])[2]") 
        this.cartpage = page.locator("//span[text()='Shopping cart']")
    }
}
export default HomePage