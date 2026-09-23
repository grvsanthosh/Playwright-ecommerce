import {test,expect} from "@playwright/test"

export const customTest = test.extend({
    login: async({page},use)=>{
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
        const product = page.locator("div.product").first()
        await product.waitFor();
        expect(product).toBeVisible();
        await page.locator("div.product",{hasText:""}).getByText('ADD TO CART').click();
        await use(page);
    },
    credentials:{
        name: "sandy"
    }
})