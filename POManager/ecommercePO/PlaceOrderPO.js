import { expect } from "@playwright/test"
export class PlaceOrderPO {
    constructor(page,data) {
        this.page = page;
        this.data = data;
        this.countryCode = this.page.getByPlaceholder('Select Country')
        this.selectCountry = this.page.getByText(this.data.countryName, { exact: true })
        this.placeOrder = this.page.locator('a.action__submit')
        this.placeOrderValidate = this.page.getByText("Order Placed Successfully")
        this.productValidate = this.page.getByText(this.data.productName)
        this.orderPlacedId = this.page.locator("label.ng-star-inserted")
        
    }


    async placingOrderAction() {
        await this.countryCode.pressSequentially(this.data.countryCode, { delay: 200 })
        await expect(this.selectCountry).toBeVisible()
        await this.selectCountry.click();
        await this.placeOrder.click();
    }
    async placeOrderValidator() {
        await expect(this.placeOrderValidate).toBeVisible()
        
        expect(await this.productValidate.textContent()).toBe(this.data.productName)
    }
    async getOrderId(){
        const data = await this.orderPlacedId.textContent()
        return data.split(' ')[2]
    }
}