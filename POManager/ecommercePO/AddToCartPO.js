import { expect } from "@playwright/test"

export class AddToCartPO {
    constructor(page) {
        this.page = page;
        this.itemList = this.page.locator(".card-body")
        this.navToaddToCart = this.page.locator("[routerlink*='cart']")
        this.checkOut = this.page.getByRole('button', { name: 'Checkout' })
        this.addToCartValidate = this.page.getByText('Product Added To Cart')
        this.cartPageValidate = this.page.locator('.cartWrap').first()
    }
    async addToCart(data) {
        await this.itemList.first().waitFor();
        for (let i = 0; i < await this.itemList.count(); i++) {
            if ((await this.itemList.locator('h5').nth(i).textContent()) === data.productName) {
                await this.itemList.nth(i).getByRole('button', { name: 'Add To Cart' }).click();
            }
        }

    }
    async addToCartValidator() {
        await expect(this.addToCartValidate).toBeVisible()
    }
    async navToCart() {
        await this.navToaddToCart.click();
    }
    async cartPageAction() {
        await this.cartPageValidate.waitFor()
        await this.checkOut.click();
    }

}