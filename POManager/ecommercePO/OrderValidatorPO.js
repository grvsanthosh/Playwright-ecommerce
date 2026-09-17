
import {expect} from "@playwright/test"

export class OrderValidatorPO{
    constructor(page,data){
        this.page = page;
        this.orderPage = this.page.locator("button[routerlink*=myorders]")
        this.orderLoad = this.page.locator(".table")
        this.placedOrderValidate = this.page.locator("tr.ng-star-inserted",{hasText:data.productName})

    }
    async orderValidation(orderId){
        await this.orderPage.click();
        await this.orderLoad.waitFor();
        const validOrderId = await this.placedOrderValidate.getByText(orderId).textContent();
        expect(validOrderId).toBe(orderId)
    }
}